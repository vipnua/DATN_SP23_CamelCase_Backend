import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    job_name:{
        type: String,
        required: true,
    },
    job_description:{
        type: String,
        required: true,
    },
    job_salary: {
        type: Number,
        required: true,
    },
    working_form: {
        type: String,
        required: true,
    },
    number_of_recruits: {
        type: Number,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    gender: {
        type: Boolean
    },
    work_location: {
        type: String,
        required: true,
    },
    user_id: {
        type: Number,
    }
}, {
    timestamps: true,
})

export default mongoose.model('post', postSchema)