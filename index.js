const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('./config/passport')
const app = express()

// DB setting
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true })
let db = mongoose.connection
db.once('open', () => {
  console.log('DB connected')
})
db.on('error', (err) => {
  console.log('DB ERROR : ', err)
})

// Other settings
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(flash())
app.use(session({ secret: 'MySecret', resave: true, saveUninitialized: true }))

// passport
app.use(passport.initialize())
app.use(passport.session())

// Custom Middlewares
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.currentUser = req.user
  next()
})

// Routes
app.use('/', require('./routes/home'))
app.use('/users', require('./routes/users'))
app.use('/board', require('./routes/board'))
app.use('/courses', require('./routes/courses'))
app.use('/teachers', require('./routes/teachers'))


// port setting
const port = 8080
app.listen(port, function () {
  console.log('gogogo')
})
