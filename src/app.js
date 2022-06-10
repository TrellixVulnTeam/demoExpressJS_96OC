const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const route = require('./routes');


const app = express()

app.engine('hbs', engine({
    extname: '.hbs'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './resource/views'))


route(app)

const port = 3001
app.listen(port, () => {
    console.log(`URL: localhost:${port}`)
})