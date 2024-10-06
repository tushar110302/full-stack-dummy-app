import express from "express";
import dotenv from "dotenv/config"
import cors from "cors"
import { connectDB } from "./db/index.js";
import userRouter from "./routes/user.route.js";

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors({
    origin: "*"
}))
app.get("/", (req,res) => {
    res.send("HELLO")
})

app.use("/api/v1", userRouter)

connectDB()
.then(() => {
    app.listen(port, () =>{
        console.log(`Server is Listening on ${port}`)
    })
})
.catch((err) => {
    console.log(err);

})