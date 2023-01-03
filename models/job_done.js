import mongoose, { Schema, ObjectId } from "mongoose";
const jobDoneSchema = new Schema({
    user_id:{
        type: Number,
        required: true,
    },
    post_id:{
        type:Number,
        required:true,
    }
}, { timestamps: true});
export default mongoose.model('Jobdone', jobDoneSchema);