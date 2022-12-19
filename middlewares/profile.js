import mongoose, { Schema, ObjectId } from "mongoose";
const profileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    CV: {
        type: String,
        required: true
    },
}, { timestamps: true});
profileSchema.index({'$**':'text'})
export default mongoose.model('Profile', profileSchema);