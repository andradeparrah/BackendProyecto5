const { default: mongoose } = require('mongoose');
const User = mongoose.model('User');

const signup = async (req, res) => {
    try {
        const user = new User(req.body);
        const resp = await user.save();
        return res.status(201).json({
            message: 'User Created',
            detail: resp 
        })
    }catch(err){
        return res.status(500).json({
            message:'Internal Server error',
            detail: err, 
        });
    }
};

const getUsers = async (req,res)=> {
    try {
        const resp = await User.find();
        return res.status(200).json({
            message:'ok',
            detail: resp
        });
    } catch (err){
        return res.status(500).json({
            message:'Internal Server error',
            detail: err 
    });
}
};

module.exports = {
    signup,
    getUsers,
};