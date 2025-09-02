import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {

    try{
        const mongoURL = process.env.MONGO_URL

        await mongoose.connect(mongoURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=> console.log("MongoDB connected successfully"))
        

    }catch(error){
        console.log(error)
    }


}