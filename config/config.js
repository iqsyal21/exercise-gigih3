require('dotenv').config();

const mongoose = require('mongoose');
const databaseUrl = process.env.DATABASE_URL

mongoose.connect(databaseUrl);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database connected')
})

module.exports = database