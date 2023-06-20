const router = require("express").Router();
const User = require("../models/User");
const Appointment = require("../models/AppointmentSchema");
// const CryptoJS = require("crypto-js");
// const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.fullname,
    tcKimlik: req.body.tcKimlik,
    password: req.body.password,
    //     password: CryptoJS.AES.encrypt(
    //       req.body.password,
    //       process.env.PASS_SEC
    //     ).toString(),
    //   });
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      tcKimlik: req.body.tcKimlik,
    });

    // !user && res.status(401).json("Wrong User Name");

    // const hashedPassword = CryptoJS.AES.decrypt(
    //   user.password,
    //   process.env.PASS_SEC
    // );

    // const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    //const inputPassword = req.body.password;

    // originalPassword != inputPassword && res.status(401).json("Wrong Password");

    // const accessToken = jwt.sign(
    //   {
    //     id: user._id,
    //     isAdmin: user.isAdmin,
    //   },
    //   process.env.JWT_SEC,
    //   { expiresIn: "3d" }
    // );

    // const { password, ...others } = user._doc;
    // res.status(200).json({ ...others, accessToken });

    if (user) {
      //check if password matches
      const result = req.body.password === user.password;
      if (result) {
        res.status(201).json(user);
      } else {
        res.status(400).json({ error: "Password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//logout
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
