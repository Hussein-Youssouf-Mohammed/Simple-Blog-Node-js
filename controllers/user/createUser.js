module.exports  = (req, res) => {
    res.render('register', {
        errors: req.flash('regErrors'),
        data: req.flash('data')[0]
    })
}