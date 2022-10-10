const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path")
const productsRoutes = require('./Routes/products')
const categoriesRoutes = require('./Routes/category')
const commandsRoutes = require('./Routes/commands')
const router = express.Router();
var cors = require('cors')

const corsOptions = {
   origin: 'http://localhost:3000',
   credentials: true,
   optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('json spaces', 3);


app.use('/', productsRoutes)
app.use('/', categoriesRoutes)
app.use('/', commandsRoutes)


router.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/view/index.html'));
});
app.use('/', router);

const server = app.listen(process.env.PORT || 5000, () => {
   console.log('listening on port %s...', server.address().port);
});