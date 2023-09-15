const express = require('express');
const app = express();
app.use(express.json());
app.use('/', (req, res)=>{
    res.send('welcome');
})

app.listen(3000, ()=>{
    console.log('your running port 3000');
})