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
    } else{
        res.status(404).json({
            message: 'Users not found',
        })
    }
};

exports.createUser = async (req, res) => {
    const user = await User.create(req.body);
    if(user){
        res.status(201).json({
            status: 'success',
            data: {
                user,
            }
        });
    }
};

exports.getUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    if(user){
        res.status(200).json({
            status: 'success',
            data: {
                user,
            }
        })
    } else{
        res.status(404).json({
            message: 'User not found',
        })
    }
};

exports.editUser = async (req, res) => {
    const {id} = req.params;
    const updatedFields = req.body;
    const user = await User.findByIdAndUpdate(id, updatedFields);
    if(user){
        res.status(200).json({
            status: 'success',
            data: {
                user,
            }
        })
    } else{
        res.status(404).json({
            message: 'Failer to update user',
        })
    }
};
