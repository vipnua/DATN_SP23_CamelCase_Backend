import mongoose from "mongoose";

const jobdoneSchema = new mongoose.Schema({
    job_name: {
        type: String,
        required: true,
    },
    job_description: {
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
    work_location: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

export default mongoose.model('jobdone', jobdoneSchema)