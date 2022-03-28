const authRoute = require('./auth')
const usersRoute = require('./users')
const subscriptionsRoute = require('./subscriptions')
const clubsRoute = require('./clubs')
const newsRoute = require('./news')
const faqRoute = require('./faq')

module.exports = (app) => {
  app.use('/api', authRoute)
  app.use('/api', usersRoute)
  app.use('/api', subscriptionsRoute)
  app.use('/api', clubsRoute)
  app.use('/api', newsRoute)
  app.use('/api', faqRoute)
}
