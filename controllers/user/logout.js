module.exports  = (req, res) => {
    req.session.destroy(() => {
        // req.logout()
         res.redirect('/')
    })
}