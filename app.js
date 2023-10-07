const express = require('express')
const path = require('path')

const main_router = require('./routes/main')
const stories_router = require('./routes/stories')

// server initialization
const app = express()
const port = 8088
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(path.join(__dirname, 'public')))

// routers
app.use('/', main_router)
app.use('/stories/', stories_router)

app.listen(port, () => console.log('Server listening at http://localhost:' + port))