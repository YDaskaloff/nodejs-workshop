const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An user must have a name'],
  },
  username: {
    type: String,
    required: [true, 'A user must have username'],
  },
  email: {
    type: String,
    required: [true, 'An user must have an email'],
    unique: true,
    validate: {
      validator: function (mail) {
        return validator.isEmail(mail);
      },
      message: 'The email must be valid',
    },
  },
  phone: {
    type: Number,
    required: [true, 'A user must have phone number'],
  },
  address: {
    type: String,
    required: [true, 'A user must have an address'],
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
