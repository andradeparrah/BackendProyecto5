const mongoose= require('mongoose')

const ProductSchema= new mongoose.Schema({
    titulo:{
        type:String,
        required:true,
    },
    precio:{
        type:Number,
        required:true,
    },
    modelo:{
        type:String,
        required:true,
    },
    marca:{
        type:String,
        required:true,
    }
    
    

})


const Product=mongoose.model('Product',ProductSchema)


module.exports=Product