const Case = require('../models/Case');

const addCase = async (req, res) => {
  const caseBody = req.body;
  try {
    const newCase = new Task(caseBody);
    await newCase.save();

    res.status(200).json({ newCase });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Client could not be added' });
  }
};

const getCases = async (req, res) => {
  try {
    const cases = await Case.find({});

    res.json({ cases });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch clients' });
  }
};

module.exports = { addCase, getCases };
