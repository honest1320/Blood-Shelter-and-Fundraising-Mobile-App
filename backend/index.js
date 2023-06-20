require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

const authRoute = require("./routes/auth");
const appointmentRoute = require("./routes/randevu");
const donorRequesttRoute = require("./routes/requests");

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/appointment", appointmentRoute);
app.use("/api/requests", donorRequesttRoute);

app.post("/pay", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name)
      return res.status(400).json({ message: "Please enter your name" });
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(50 * 100),
      currency: "TRY",
      payment_method_types: ["card"],
      metadata: { name },
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({ message: "Payment initiated", clientSecret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
