require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

app.use(cors()); 
app.use(express.json());

app.use('/uploads', express.static('public/uploads'));

app.use('/auth', require('./routes/authController'));


app.listen(3000, () => console.log('Server started on port 3000'));
