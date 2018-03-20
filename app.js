const   express         = require('express'),
        bodyParser      = require('body-parser'),
        mongoose        = require('mongoose'),
        app             = express(),
    //regenerate items to db
        seedDB          = require('./seeds'),
    //root dir
        resolve         = require('path').resolve;
        global.appRoot  = resolve(__dirname);
    // RESTful for catalog
const   routesItems     = require('./models/routes/items')


mongoose.connect('mongodb://localhost/TheWildWind')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./semantic/dist/'))
app.use(express.static('./assets/css/'))
app.set('view engine', 'ejs')
seedDB();

//Schema Setup
const Item = require('./models/items')
const Comments = require('./models/reviews')
const User = require('./models/user')


app.get('/', (req, res) => {
    res.render('landing')
})

app.get('/catalog', routesItems.catalog)
app.get('/catalog/new', routesItems.catalogNew)
app.post("/catalog", routesItems.catalogCreate)
app.get('/catalog/:id', routesItems.catalogShow)

app.listen(process.env.PORT || 80, () => {

})
