module.exports  = (req, res) => {
    if(req.session.userId) {
     return res.render('create_post')
    } 

    res.redirect('/login')
}