const User  = require('../../database/models/User')

module.exports  = (req, res) => {
   User.create(req.body, (error, user) => {
       if(error) {
           const regErrors =Object.keys(error.errors).map(key => error.errors[key].message)
           req.flash('regErrors', regErrors)
           req.flash('data', req.body)
           return res.redirect('/create/user')
        }
        req.session.userId  = user._id
       res.redirect('/')
   })
}