const mongoose = require('mongoose');

const dbInit = () => {
    mongoose.connect('{CONNECTION_STRING}').then(() =>{
        console.log('DB is connected');
    })
};

module.exports = dbInit;