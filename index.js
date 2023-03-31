const express = require("express");
const app = express();
const auth = require("./routes/authRoutes")

app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1",auth)

const PORT = 1221;

app.listen(PORT,()=>{
    console.log("App is running on port : " + PORT )
})