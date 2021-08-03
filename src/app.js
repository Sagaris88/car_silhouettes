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

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
    })
})

app.get('/bestsellers', (req, res) => {
    res.render('bestsellers', {
        title: 'Bestsellers',
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

app.get('/alfaromeo', (req, res) => {
    res.render('alfaromeo', {
        title: 'Alfa Romeo'
    })
})

app.get('/alpine', (req, res) => {
    res.render('alpine', {
        title: 'Alpine'
    })
})

app.get('/amc', (req, res) => {
    res.render('amc', {
        title: 'American Motors Company'
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

app.get('/autozam', (req, res) => {
    res.render('autozam', {
        title: 'Autozam'
    })
})

app.get('/bac', (req, res) => {
    res.render('bac', {
        title: 'BAC'
    })
})

app.get('/bentley', (req, res) => {
    res.render('bentley', {
        title: 'Bentley'
    })
})

app.get('/bizzarrini', (req, res) => {
    res.render('bizzarrini', {
        title: 'Bizzarrini'
    })
})

app.get('/bmw', (req, res) => {
    res.render('bmw', {
        title: 'bmw'
    })
})

app.get('/bricklin', (req, res) => {
    res.render('bricklin', {
        title: 'Bricklin'
    })
})

app.get('/bugatti', (req, res) => {
    res.render('bugatti', {
        title: 'Bugatti'
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

app.get('/chrysler', (req, res) => {
    res.render('chrysler', {
        title: 'Chrysler'
    })
})

app.get('/citroen', (req, res) => {
    res.render('citroen', {
        title: 'Citroen'
    })
})

app.get('/cizeta', (req, res) => {
    res.render('cizeta', {
        title: 'Cizeta'
    })
})

app.get('/detomaso', (req, res) => {
    res.render('detomaso', {
        title: 'De Tomaso'
    })
})

app.get('/delorean', (req, res) => {
    res.render('delorean', {
        title: 'DeLorean'
    })
})

app.get('/dodge', (req, res) => {
    res.render('dodge', {
        title: 'Dodge'
    })
})

app.get('/facel', (req, res) => {
    res.render('facel', {
        title: 'Facel'
    })
})

app.get('/ferrari', (req, res) => {
    res.render('ferrari', {
        title: 'Ferrari'
    })
})

app.get('/ford', (req, res) => {
    res.render('ford', {
        title: 'Ford'
    })
})

app.get('/holden', (req, res) => {
    res.render('holden', {
        title: 'Holden'
    })
})

app.get('/honda', (req, res) => {
    res.render('honda', {
        title: 'Honda'
    })
})

app.get('/hyundai', (req, res) => {
    res.render('hyundai', {
        title: 'Hyundai'
    })
})

app.get('/jaguar', (req, res) => {
    res.render('jaguar', {
        title: 'Jaguar'
    })
})

app.get('/jensen', (req, res) => {
    res.render('jensen', {
        title: 'Jensen'
    })
})

app.get('/ktm', (req, res) => {
    res.render('ktm', {
        title: 'KTM'
    })
})

app.get('/kia', (req, res) => {
    res.render('kia', {
        title: 'Kia'
    })
})

app.get('/lada', (req, res) => {
    res.render('lada', {
        title: 'Lada'
    })
})

app.get('/lamborghini', (req, res) => {
    res.render('lamborghini', {
        title: 'Lamborghini'
    })
})

app.get('/lancia', (req, res) => {
    res.render('lancia', {
        title: 'Lancia'
    })
})

app.get('/lexus', (req, res) => {
    res.render('lexus', {
        title: 'Lexus'
    })
})

app.get('/ligier', (req, res) => {
    res.render('ligier', {
        title: 'Ligier'
    })
})

app.get('/maserati', (req, res) => {
    res.render('maserati', {
        title: 'Maserati'
    })
})

app.get('/mazda', (req, res) => {
    res.render('mazda', {
        title: 'Mazda'
    })
})

app.get('/mclaren', (req, res) => {
    res.render('mclaren', {
        title: 'McLaren'
    })
})

app.get('/melkus', (req, res) => {
    res.render('melkus', {
        title: 'Melkus'
    })
})

app.get('/mercedes-benz', (req, res) => {
    res.render('mercedesbenz', {
        title: 'Mercedes-Benz'
    })
})

app.get('/mercury', (req, res) => {
    res.render('mercury', {
        title: 'Mercury'
    })
})

app.get('/mitsubishi', (req, res) => {
    res.render('mitsubishi', {
        title: 'Mitsubishi'
    })
})

app.get('/monteverdi', (req, res) => {
    res.render('monteverdi', {
        title: 'Monteverdi'
    })
})

app.get('/nissan', (req, res) => {
    res.render('nissan', {
        title: 'Nissan'
    })
})

app.get('/oldsmobile', (req, res) => {
    res.render('oldsmobile', {
        title: 'oldsmobile'
    })
})

app.get('/opel', (req, res) => {
    res.render('opel', {
        title: 'Opel'
    })
})

app.get('/pagani', (req, res) => {
    res.render('pagani', {
        title: 'Pagani'
    })
})

app.get('/panhard', (req, res) => {
    res.render('panhard', {
        title: 'Panhard'
    })
})

app.get('/peugeot', (req, res) => {
    res.render('peugeot', {
        title: 'Peugeot'
    })
})

app.get('/pininfarina', (req, res) => {
    res.render('pininfarina', {
        title: 'Pininfarina'
    })
})

app.get('/plymouth', (req, res) => {
    res.render('plymouth', {
        title: 'Plymouth'
    })
})

app.get('/pontiac', (req, res) => {
    res.render('pontiac', {
        title: 'Pontiac'
    })
})

app.get('/porsche', (req, res) => {
    res.render('porsche', {
        title: 'Porsche'
    })
})

app.get('/renault', (req, res) => {
    res.render('renault', {
        title: 'Renault'
    })
})

app.get('/saab', (req, res) => {
    res.render('saab', {
        title: 'Saab'
    })
})

app.get('/saleen', (req, res) => {
    res.render('saleen', {
        title: 'Saleen'
    })
})

app.get('/saturn', (req, res) => {
    res.render('saturn', {
        title: 'Saturn'
    })
})

app.get('/smart', (req, res) => {
    res.render('smart', {
        title: 'smart'
    })
})

app.get('/spyker', (req, res) => {
    res.render('spyker', {
        title: 'Spyker'
    })
})

app.get('/subaru', (req, res) => {
    res.render('subaru', {
        title: 'Subaru'
    })
})

app.get('/tesla', (req, res) => {
    res.render('tesla', {
        title: 'Tesla'
    })
})

app.get('/toyota', (req, res) => {
    res.render('toyota', {
        title: 'Toyota'
    })
})

app.get('/trabant', (req, res) => {
    res.render('trabant', {
        title: 'Trabant'
    })
})

app.get('/tvr', (req, res) => {
    res.render('tvr', {
        title: 'TVR'
    })
})

app.get('/vector', (req, res) => {
    res.render('vector', {
        title: 'Vector'
    })
})

app.get('/volvo', (req, res) => {
    res.render('volvo', {
        title: 'Volvo'
    })
})

app.get('/wiesmann', (req, res) => {
    res.render('wiesmann', {
        title: 'Wiesmann'
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