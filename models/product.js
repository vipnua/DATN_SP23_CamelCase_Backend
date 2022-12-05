import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    feature:{
        type: String,
        required: true
    },
    descriptionS: {
        type: String,
        required: true
    },
    saleOffPrice: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true});
productSchema.index({'$**':'text'})
export default mongoose.model('Product', productSchema);