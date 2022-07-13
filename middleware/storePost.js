module.exports  = (req, res, next) => {
    if(!req.files) {
        return res.redirect('/new/post')
    }
    next()
}