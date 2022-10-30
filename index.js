const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === "08") {
        res.send(news)
    } else {
        const categoryNews = news.filter(n => n.categoryid === id);
        res.send(categoryNews)
    }
})

/* ------------- 
news json api
---------------- */

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n.id === id);
    res.send(selectedNews);
})


app.get('/news', (req, res) => {
    res.send(news)
})








app.listen(port, () => {
    console.log(`Drogon news ${port}`)
})


