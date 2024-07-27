import {mongoose} from "mongoose";

const cartSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    }, 
    productName: {
        type: String,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productAmount: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    }
   
}, {timestamps: true})
 
const Cart =  mongoose.models.cartProducts || mongoose.model('cartProducts', cartSchema);

export default Cart