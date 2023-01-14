const User = require('../models/Users');

exports.getAllUsers = async (req, res) => {
    const users = await User.find(req.params);
    if(users){
        res.status(200).json({
            status: 'success',
            data: {
              users,
            }
        });
    }
};

exports.createUser = async (req, res) => {
};

exports.getUser = async (req, res) => {
};
