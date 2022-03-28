// Write only in es15
const bodyParser = require('body-parser')
// eslint-disable-next-line import/no-unresolved
const cors = require('cors')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')
const config = require('./config')
console.log('config', config)

const app = express()
/* eslint-disable */
// database models
require('./models')

mongoose
  .connect(config.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((r) => {})

require('./config/passport')(passport)

app.use(passport.initialize())
app.use(passport.session())

app.use(cors())

app.use(express.static(process.cwd() + '/public'))

app.use(bodyParser.json({ limit: '50mb' }))
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(express.json())

// app.use(
//   session({
//     secret: config.SECRET_KEY,
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({
//       mongoUrl: config.MONGO_DB_URL
//     }),
//     cookie: { secure: false }
//   })
// )

require('./routes')(app)

/** ********************* Configure static files ********************** */
console.log('STAGING: ', config.isStageMode)
console.log('PROD: ', config.NODE_ENV)

// if (!config.NODE_ENV) {
//   app.use((req, res, next) => {
//     next()
//   })
// }
/* Admin */
if (config.NODE_ENV === 'production') {
  // if (config.NODE_ENV) {
  const frontPath = path.join(__dirname, '..', 'front', 'build')

  console.log('frontPath', frontPath)
  const adminPathIndexFile = path.join(
    __dirname,
    '..',
    'front',
    'build',
    'index.html'
  )

  app.disable('x-powered-by')
  app.use(express.static(frontPath))
  app.use('/public/', express.static(frontPath))

  // app.get('/login', (_, res) => res.sendFile(adminPathIndexFile))
  // app.get('/register', (_, res) => res.sendFile(adminPathIndexFile))
  app.get('/', (_, res) => res.sendFile(adminPathIndexFile))
  app.get('/*', (_, res) => res.sendFile(adminPathIndexFile))
} else {
  console.log('DEV')
  const publicPath = path.join(__dirname, '..', 'public')
  app.use(express.static(publicPath))
  // app.use(express.logger('dev'));
  app.use('/public/', express.static(publicPath))
}

app.listen(config.PORT, () => {
  console.log(`Ready on port: ${config.PORT}`)
})
/* eslint-enable */
