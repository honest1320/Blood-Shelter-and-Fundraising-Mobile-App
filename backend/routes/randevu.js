const Appointment = require("../models/AppointmentSchema");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newAppointment = new Appointment(req.body);

  try {
    const savedAppointment = await newAppointment.save();
    res.status(200).json(savedAppointment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL APPOINTMENTS
router.get("/", async (req, res) => {
  try {
    let appointments;

    appointments = await Appointment.find();

    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE;
// router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const updatedProduct = await Product.findOneAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//DELETE
router.delete("/", async (req, res) => {
  try {
    const app = await Appointment.findOneAndDelete(req.body.tcKimlik);
    res.status(200).json("Randevun İptal Edildi ... " + app.name);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
