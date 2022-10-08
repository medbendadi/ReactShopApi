const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productsRoutes = require('./Routes/products')
const categoriesRoutes = require('./Routes/category')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('json spaces', 3);

app.use('/', productsRoutes)
app.use('/', categoriesRoutes)
const server = app.listen(process.env.PORT || 5000, () => {
   console.log('listening on port %s...', server.address().port);
});