const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/offene-bibliothek', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB verbunden'))
    .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send('Willkommen zur Offenen Bibliothek Katalog API!');
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});