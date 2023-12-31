const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
    slno:{
        type:Number,
    },
    formno:{
        type:String,
    },
    aadharno:{
        type:String,
    },
    classr:{
        type:String,
    },
    stuname:{
        type:String,
    },
    dob:{
        type:String,
    },
    mothert:{
        type:String,
    },
    caste:{
        type:String,
    },
    religion:{
        type:String,
    },
    flan:{
        type:String,
    },
    sex:{
        type:String,
    },
    bloodgr:{
        type:String,
    },
    transport:{
        type:String,
    },
    fname:{
        type:String,
    },
    fedu:{
        type:String,
    },
    foccu:{
        type:String,
    },
    ftel:{
        type:Number,
    },
    mname:{
        type:String,
    },
    medu:{
        type:String,
    },
    moccu:{
        type:String,
    },
    mtel:{
        type:Number,
    },
    resiprnts:{
        type:String,
    },
    resiphone:{
        type:Number,
    },
    income:{
        type:Number,
    },
    gtel:{
        type:Number,
        default:0
    },
    selected:{
        type:String,
        default:"yet"
    },

});


module.exports = mongoose.model("newad", admissionSchema);