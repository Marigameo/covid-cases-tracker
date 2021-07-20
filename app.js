// get http module & port no, server url 

// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('this is a simple node js app')
// })

// server.listen(port, hostname, () => {
//     console.log(`Listening to port ${port}`)
// })

const express = require('express')

const app = express()

const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/career', (req, res) => {
    res.render('career')
})

app.get('/products', (req, res) => {
    res.render('products')
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})