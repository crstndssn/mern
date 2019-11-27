const userCrtl = {};

const User = require('../models/Users')

userCrtl.getUsers = async (req, res) => {
    const users = await User.find();
    res.send(users)
}

userCrtl.createUser = async (req, res) => {
    console.log(req.body)
    const { username } = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User created')
}

userCrtl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.send('Delete User')
}

module.exports = userCrtl;