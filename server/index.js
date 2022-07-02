const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.set('view engine', 'ejs')


app.listen(4000,()=>{console.log('Server Running on http://localhost:4000')});