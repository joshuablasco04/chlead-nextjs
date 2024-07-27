import {mongoose} from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    cart: {
        type: Array,
        required: true
    },
    purchased: {
        type: Array,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }

}, {timestamps: true});
 
const Users =  mongoose.models.userdatas || mongoose.model('userdatas', userSchema);

export default Users

