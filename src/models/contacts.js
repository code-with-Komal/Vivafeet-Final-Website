const mongoose = require("mongoose");

const earlyBirdReg = new mongoose.Schema({
    email : {
        type:String,
        required:true,
        unique: true
    },
    subject : {
        type: String,
        required: true
    },
    message : {
        type: String,
        required: true
    }
})

const Register = new mongoose.model("Contact",earlyBirdReg);
module.exports = Register;