import mongoose from "mongoose";



const connectionDB = async() => {
 try {
         const connectdb = await mongoose.connect(process.env.MONGODB_URI) 
         console.log(`MONGODB connected to database Successfully ${connectdb.connection.host}`);
         
 } catch (error) {
    console.log('mongodb connection failed');
    
 }
}



export default connectionDB