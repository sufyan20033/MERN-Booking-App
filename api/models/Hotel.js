import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    photos:{
        type:[String]
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String],
    },
    cheapestPrice:{
        type: Number,
        required: true,
    }

});
export default mongoose.model("Hotel",HotelSchema)