const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require('mongoose')


const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}))
// app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/blog')


app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");


const articles = require("./helpers/articles");
app.get("/", (req, res) => {
	res.render("./articles/index", { articles: articles });
});

app.get("/new", (req, res) => {
	res.render("./articles/new", { articles: articles });
});


const articlesRoute = require("./routes/articles");
app.use("/articles", articlesRoute);

app.listen(4000, () => {
	console.log("Server Running on http://localhost:4000");
});
