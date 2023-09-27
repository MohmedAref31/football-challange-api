const mongoose = require("mongoose")


const playerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        type:String,
        required:true,
        trim:true,
    },
    isActive:{
        type:Boolean,
        default:false
    }
})


const Player = mongoose.model("Player", playerSchema)


module.exports = Player