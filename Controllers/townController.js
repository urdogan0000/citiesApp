const Town = require("../Models/Town");

exports.getTowns = async (req, res) => {
  try {
    const towns = await Town.find();

    res.status(200).json(towns);
  } catch (error) {
    res.status(400).json({ status: failed });
  }
};

exports.createTown = async (req, res) => {
  try {
    console.log(req.body);
    const town = await Town.create(req.body)
    res.status(201).json({ town });
  } catch (err) {
    res.status(401).json({ status: "failed", err });
  }
};
