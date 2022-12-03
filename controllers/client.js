const Client = require('../models/Client');

const addClient = async (req, res) => {
  const client = req.body;
  try {
    const newClient = new Client(client);
    await newClient.save();

    res.status(200).json({ newClient });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Client could not be added' });
  }
};

const getClients = async (req, res) => {
  try {
    const clients = await Client.find({});

    res.json({ clients });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch clients' });
  }
};

module.exports = { addClient, getClients };
