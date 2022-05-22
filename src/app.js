const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const route = require('./routes');


const app = express()

app.use(express.static(path.join(__dirname, './public')))

// app.use(express.urlencoded())
// app.use(express.json)

app.engine('hbs', engine({
    extname: '.hbs'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './resource/views'))


route(app)

const port = 3000
app.listen(port, () => {
    console.log(`URL: localhost:${port}`)
})