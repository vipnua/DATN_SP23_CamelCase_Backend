import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    package_day: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
    },
    user_id: {
        type: Number,
    },
}, {
    timestamps: true,
})

export default mongoose.model('package', packageSchema)