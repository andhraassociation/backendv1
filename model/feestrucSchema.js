const mongoose = require("mongoose");

const feestrucSchema = new mongoose.Schema({
    class:{
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
    }
});


module.exports = mongoose.model("feestruc", feestrucSchema);

