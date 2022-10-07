const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productsRoutes = require('./Routes/products')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('json spaces', 3);

app.use('/', productsRoutes)
const server = app.listen(process.env.PORT || 5000, () => {
   console.log('listening on port %s...', server.address().port);
});