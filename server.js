const router = require("./ERouter/router");
const express = require("express");
const app= express();
const bodyparser = require("body-parser");
const product_table = require("./producttable/productschema")
const buy_router  = require("./Productbuy/buy")
const mongoose = require("mongoose");
let url ="mongodb://localhost:27017/Ecommerce";
mongoose.connect(url);
app.use(bodyparser.json());
app.use("/getdata",router);
app.use("/buy",buy_router);
app.listen(3000,console.log("sever is runing"));