import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type:Number,
        required: true,
    },
    admin:{
        type: Boolean,
        default: false
    }

});
export default mongoose.model("User",UserSchema)