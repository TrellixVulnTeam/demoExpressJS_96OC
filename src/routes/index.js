const newsRouter = require('./news')
const sitesRouter = require('./sites')
function route(app) {

    app.use('/news', newsRouter)
    
    app.use('/search', sitesRouter)
    
}

module.exports = route