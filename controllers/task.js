const Task = require('../models/Task');

const addTask = async (req, res) => {
  const task = req.body;
  try {
    const newTask = new Task(task);
    await newTask.save();

    res.status(200).json({ newTask });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Client could not be added' });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.json({ tasks });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch clients' });
  }
};

module.exports = { addTask, getTasks };
