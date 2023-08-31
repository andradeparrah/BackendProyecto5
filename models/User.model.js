const mongoose = require ('mongoose')

const UseSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    pass:{
        type: String,
        required: true
    },mail:{
        type: String,
        required:true
    }
});

mongoose.model('User',UseSchema)