require ('dotenv').config();
require('./models/User.model');
const userRoutes = require ('./routes/User.routes');
const mongoose = require ('mongoose');
mongoose.connect(process.env.MONGO_URI + 'dogbikes');

const express=require('express');
const app = express ();

const port = process.env.PORT;

app.use(express.json())
app.use('/users',userRoutes );


app.get ('/', (req,res)=> {
    res.status(200).json({
        mensaje:'ruta get'
    })
})

app.post ('/', (req,res)=> {

    res.status(200).json({message:'ruta post',detail:''})
})

app.put ('/', (req,res)=> {
    res.status(200).json({
        mensaje:'ruta put'
    })
})

app.delete ('/', (req,res)=> {
    res.status(200).json({
        mensaje:'ruta delete'
    })
})


app.listen(port,()=>{
    console.log(`escuchando ${port}`)
})