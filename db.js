import mongoose from "mongoose";

const connect = async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Mongodb connection successful')
    } catch (error){
        throw new Error('Error in connecting to database')
    }
}

export default connect;