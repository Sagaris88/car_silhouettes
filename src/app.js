// const fs = require('fs')
// const chalk = require('chalk')
// const validator = require('validator')
// const checkUtils = require('./utils.js')
// fs.writeFileSync('notes.txt', 'I live in bolton')

// console.log(chalk.red(validator.isURL('https://afternoon-shelf-95340.herokuapp.com/')))
// console.log(chalk.blue.bgWhite.bold('Hello'))
// checkUtils()

const path = require('path') // Core node module, no need to install
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Main Page',
    })
})

app.get('/new', (req, res) => {
    res.render('new', {
        title: 'Newest Post',
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
    })
})

app.get('/test', (req, res) => {
    res.render('test', {
        title: 'Test'
    })
})

app.get('/acura', (req, res) => {
    res.render('acura', {
        title: 'Acura'
    })
})

app.get('/astonmartin', (req, res) => {
    res.render('astonmartin', {
        title: 'Aston Martin'
    })
})

app.get('/audi', (req, res) => {
    res.render('audi', {
        title: 'Audi'
    })
})

app.get('/bizzarrinni', (req, res) => {
    res.render('bizzarrinni', {
        title: 'Bizzarrinni'
    })
})

app.get('/bricklin', (req, res) => {
    res.render('bricklin', {
        title: 'Bricklin'
    })
})

app.get('/buick', (req, res) => {
    res.render('buick', {
        title: 'Buick'
    })
})

app.get('/chevrolet', (req, res) => {
    res.render('chevrolet', {
        title: 'Chevrolet'
    })
})

app.get('/jensen', (req, res) => {
    res.render('jensen', {
        title: 'Jensen'
    })
})

app.get('/tesla', (req, res) => {
    res.render('tesla', {
        title: 'Tesla'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Page not found',
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})