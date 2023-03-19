const mongoose = require("mongoose");

const earlyBirdReg = new mongoose.Schema({
    user_name : {
        type:String,
        required:true
    },
    user_email : {
        type: String,
        required: true,
        unique: true
    },
    user_state : {
        type: String,
        required: true
    }
})

const Register = new mongoose.model("Register",earlyBirdReg);
module.exports = Register;