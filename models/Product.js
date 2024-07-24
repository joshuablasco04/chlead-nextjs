import {mongoose} from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    productAmount: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    }
}, {timestamps: true});
 
const Products =  mongoose.models.products || mongoose.model('products', productSchema);

export default Products