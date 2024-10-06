import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(`${process.env.DB_URI}/test-app`)
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error connecting to DB")
        process.exit(1);
    }
}