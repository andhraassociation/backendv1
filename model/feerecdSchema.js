const mongoose = require("mongoose");

const feerecdSchema = new mongoose.Schema({
    mrno:{
        type:String
    },
    date:{
        type:String
    },
    year:{
        type:Number
    },
    admnno:{
        type:String
    },
    name:{
        type:String
    },
    unit:{
        type:String
    },
    class:{
        type:String,
    },
    section:{
        type:String,
    },
    rollno:{
        type:String,
    },
    month:{
        type:String,
    },
    tution:{
        type:Number,
    },
    computer:{
        type:Number,
    },
    term:{
        type:Number,
    },
    develop:{
        type:Number,
    },
    ec:{
        type:Number,
    },
    calender:{
        type:Number,
    },
    admission:{
        type:Number,
    },
    caution:{
        type:Number,
    },
    late:{
        type:Number,
    },
    readmi:{
        type:Number,
    },
    transport:{
        type:Number,
    },
    misc:{
        type:Number,
    },
    lessadjst:{
        type:Number,
    },
    totpay:{
        type:Number,
    },
    chequeno:{
        type:String,
    },
    bank:{
        type:String,
    },
    branch:{
        type:String,
    },
    chqdate:{
        type: String,
    },
    clear:{
        type:String,
    },
    cleardt:{
        type: String,
    },
});


module.exports = mongoose.model("feerecd", feerecdSchema);

