import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    Room:{
        type: String,
        required: true,
        
    },
    price:{
        type: Number,
        required: true
    },
    beds:{
        type: Number,
        required: true
    },
    NumberofRooms:[{num: Number, unavailableDates:{type: [Date]}}]
})
export default mongoose.model("Room",RoomSchema)