require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Import routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Simple route
app.get('/', (req, res) => {
    res.send('Welcome to the Health and Fitness App API');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
