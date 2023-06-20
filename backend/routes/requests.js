const Request = require("../models/Request");

const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {
  const newRequest = new Request(req.body);

  try {
    const savedRequest = await newRequest.save();
    res.status(200).json(savedRequest);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE v2
// router.post("/", async (req, res) => {
//   const newUser = new User({
//     name: req.body.fullname,
//     tcKimlik: req.body.tcKimlik,
//     password: req.body.password,
//   });

//   try {
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//GET ALL APPOINTMENTS
router.get("/", async (req, res) => {
  try {
    let requests;

    requests = await Request.find();

    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
