//console.log('Hello IK');
const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/note", noteRouter);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log('Hello IK ON PORT ' + PORT);
    });
}
).catch((error)=>{
    console.log(error);
})



// app.listen(5000, ()=>{
//     console.log('Hello IK');
// });