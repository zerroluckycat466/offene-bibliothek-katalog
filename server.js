const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse incoming JSON requests

const PORT = process.env.PORT || 5000; // Define the port for the server

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/offene-bibliothek', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB verbunden')) // Log success message
    .catch(err => console.error(err)); // Log any connection errors

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Willkommen zur Offenen Bibliothek Katalog API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`); // Log server running message
});