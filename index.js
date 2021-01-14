const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use(express.static('public'))

// set view engine to ejs
app.set('view engine', 'ejs')

// index page route
app.get('/', (req, res) => {
    res.render('pages/index')
})

// About page route
app.get('/about', (req, res) => {
    res.render('pages/about')
})

// Shop page route
app.get('/shop', (req, res) => {
    res.render('pages/shop')
})

// Contact page route
app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

app.listen(5000, () => {
    console.log('Application is Running on PORT: 5000');
})