import mongoose from "mongoose";
const jobsaveSchema = new mongoose.Schema({
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
    }
}, {
    timestamps: true,
})
export default mongoose.model('jobsave', jobsaveSchema)