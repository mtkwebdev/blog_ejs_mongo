const express = require('express');
const cors = require('cors');
const path = require('path');

const articles = require('./utils/articles')

const articlesRoute = require('./routes/articles');

const app = express();
app.use(cors());
app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.render('index', {articles: articles});
});

app.use('/articles', articlesRoute);


app.listen(4000,()=>{console.log('Server Running on http://localhost:4000')}); 