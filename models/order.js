import mongoose, { Schema, ObjectId } from "mongoose";
const OrderSchema = new Schema({
    user_id:{
        type: Number,
        required: true,
    },
    package_id:{
        type:Number,
        required:true,
    }
}, { timestamps: true});
export default mongoose.model('Order', OrderSchema);