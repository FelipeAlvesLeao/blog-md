const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const methodOverride = require('method-override')

mongoose.connect('mongodb+srv://felipealvesleao3:b8QYjit3hTynRQKH@cluster0.ojzexa2.mongodb.net/?retryWrites=true&w=majority')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use('/articles', articleRouter)
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({createdAt: 'desc'});
    res.render('articles/index', {articles : articles})
})


app.listen(PORT);