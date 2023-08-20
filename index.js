require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = 8080;
app.use(express.json());
app.use(cookiParser());
app.use(cors());
const studRouter = require("./routes/studlroute");
app.use("/stud", studRouter);

app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})