const mongoose = require('mongoose');
const { CONNECTION_STRING } = require('../env');

const dbInit = () => {
    mongoose.connect(CONNECTION_STRING).then(() =>{
        console.log('DB is connected');
    })
};

module.exports = dbInit;