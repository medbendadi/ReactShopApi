Welcome to DD API
=================

### Reset API for React Shop Admin APP

#### Powered By [NodeJS](https://nodejs.org/en/) + [ExpressJS](https://expressjs.com/)

How to use:
-----------

    fetch('https://dd-shop.herokuapp.com/categories')
             .then(response => response.json())
             .then(json => console.log(json))

Resources
---------

this API comes with a set of 4 common resources:

*   [/products](/products) Get All Products
*   [/categories](/categories) Get All Categories
*   [/commands](#) Get All commands
*   [/users](#) Get All Users

**Note:** resources have relations. For example: category have many products, command have many products

Routes
------

All HTTP methods are supported. You can use http or https for your requests.

*   GET [/products](/products)
*   GET
    
    /products/:id
    
*   POST
    
    /products
    
*   PUT
    
    /products/:id
    
*   DELETE
    
    /products/:id
    
*   GET [/categories](/categories)
*   GET
    
    /categories/:id
    
*   GET
    
    /categories/:id/products
    
*   POST
    
    /categories
    
*   PUT
    
    /categories/:id
    
*   DELETE
    
    /categories/:id
    
*   GET [/commands](/commands)
*   GET
    
    /commands/:id
    
*   GET
    
    /commands/:id/products
    
*   POST
    
    /commands
    
*   PUT
    
    /commands/:id
    
*   PUT
    
    /commands/:id/status
    
*   DELETE
    
    /commands/:id
    

[You can See this Project an Others on Github 💗](https://github.com/medbendadi)
