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
    const user = await User.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            user,
        }
    });
};

exports.getUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json({
        status: 'success',
        data: {
            user,
        }
    });
};
