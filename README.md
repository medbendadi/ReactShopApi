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

*   GET &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [/products](/products)
*   GET &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /products/:id
    
*   POST &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /products
    
*   PUT &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /products/:id
    
*   DELETE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /products/:id
    
*   GET &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [/categories](/categories)
*   GET &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /categories/:id
    
*   GET &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /categories/:id/products
    
*   POST &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /categories
    
*   PUT &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /categories/:id
    
*   DELETE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /categories/:id
    
*   GET &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [/commands](/commands)
*   GET &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /commands/:id
    
*   GET &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /commands/:id/products
    
*   POST &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /commands
    
*   PUT &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /commands/:id
    
*   PUT &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /commands/:id/status
    
*   DELETE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /commands/:id
    

[You can See this Project and Others on Github 💗](https://github.com/medbendadi/ReactShopApi)
