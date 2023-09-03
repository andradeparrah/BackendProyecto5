const mongoose = require ('mongoose')

const UseSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: {
            validator:function(v){
                return /^[a-zA-Z0-9 ]{3,30}$/.test(v)
            }
        }
    },
    password:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required:true,
        validate: {
            validator:function(v){
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v)
            },
        }, 
        
    }
}, {
    timestamps:true
});

const User = mongoose.model('User',UseSchema)
module.exports = User