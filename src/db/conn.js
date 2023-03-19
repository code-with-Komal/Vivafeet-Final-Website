const mongoose = require("mongoose");
mongoose.set(`strictQuery`,false);
mongoose.connect("mongodb+srv://codewithkomal:Komal_1673@cluster0.frxibpw.mongodb.net/earlybirdregistrations",{
    useNewURLParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(e.message);
})
