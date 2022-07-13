const  express  =  require('express')
const expressEdge  = require('express-edge')
const  mongoose  = require('mongoose')
const  bodyParser  = require('body-parser')
const fileUpload  = require('express-fileupload')
const  expressSession  = require('express-session')
const connectMongo    = require('connect-mongo')
const connectFlash    = require('connect-flash')
const edge            = require('edge.js')
const  app  = new express()
mongoose.connect('mongodb://localhost/node-js-blog-first')
const mongoStore  =  connectMongo(expressSession)
app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}))
app.use(connectFlash())
const createPostController  = require('./controllers/post/createPost')
const storePostController   = require('./controllers/post/storePost')
const  getPostController   = require('./controllers/post/getPost')
const  homeController      = require('./controllers/home/home')
const createUserController           = require('./controllers/user/createUser')
const storeUserController    = require('./controllers/user/storeUser')
const LoginController     =  require('./controllers/user/login')
const loginUserController  = require('./controllers/user/loginUser')
const redirectAuth          = require('./middleware/redirectAuth')
const logoutController     = require('./controllers/user/logout')
app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge.engine);
app.set('views', `${__dirname}/views`);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const storePost  = require('./middleware/storePost')
const auth                 = require('./middleware/auth')
app.use('*', (req, res, next) => {
    // edge.global('auth', req.session.userId)
    app.locals.auth = req.session.userId
    next()
})
app.use('/post/store', storePost)
app.get('/',homeController)
app.get('/new/post',auth, createPostController)
app.post('/post/store',storePost, auth, storePostController)
app.get('/post/:id', getPostController)
// login routes  
app.get('/login', redirectAuth, LoginController);
app.post('/user/login', redirectAuth, loginUserController)
// logout route 
app.get('/auth/logout', auth, logoutController)
// user routes  
app.get('/create/user', redirectAuth, createUserController)
app.post('/user/store', redirectAuth, storeUserController)
app.listen(3000, () => {
    console.log('App listen on port 3000')
})