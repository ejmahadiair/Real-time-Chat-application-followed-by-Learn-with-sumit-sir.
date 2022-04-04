//external import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieparser = require("cookie-parser");

//internal import
const { notfound, errorhandler } = require("./middleware/common/errorhandler");
const loginRouter = require("./router/longinRouter");
const userRouter = require("./router/userRouter");
const inboxRouter = require("./router/inboxRouter");

const app = express();
dotenv.config();

//datavase connect
mongoose
    .connect("mongodb://localhost/chat", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database connection successfull!"))
    .catch((err) => console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engin
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//set cookie parser
app.use(cookieparser(process.env.COOKIE_SECRET));

//routing setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);

//404 not found
app.use(notfound);
//common errorhandler
app.use(errorhandler);

app.listen(process.env.PORT, () => {
    console.log("Server is running or port 5000!");
});
