const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const categories =require('./catagory.json')
const news = require('./news.json')
app.use(cors())
app.get('/',(req, res)=>{
    res.send('Dragon is running')
})
app.get('/categories',(req, res)=>{
    res.send(categories)
})
app.get('/news',(req, res)=>{
    res.send(news)
})
app.get('/news/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const selectedNews = news.find( n => parseInt(n._id) === id)
    res.send(selectedNews)
})
app.get('/categories/:id', (req,res)=>{
    const id = parseInt(req.params.id); 
   if(id === 0){
    res.send(news)
   }else{
    const catagoryNews = news.filter(n=> parseInt(n.category_id) === id)
    res.send(catagoryNews)
   }
})
app.listen(port,()=>{
    console.log(`Dragon Api is running on port: ${port}`)
})
