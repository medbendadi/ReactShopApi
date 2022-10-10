const fs = require("fs");
const path = require("path");

const jsonPath = path.resolve(__dirname, "../data/data.json");

// Storing the JSON format data in myObject
var data = JSON.parse(fs.readFileSync(jsonPath));
var myObject = data;



const { v4 } = require('uuid')

const getAllProducts = (req, res) => {
   res.json(myObject['products'])
   // res.send("Hello")
}


const getOneProduct = (req, res) => {
   const { id } = req.params
   const selectedItem = myObject['products'].filter((prod) => prod.id == id)
   res.send(selectedItem[1])
}


const AddProduct = (req, res) => {
   const { title, price, stock, categoryID } = req.body
   const newProd = { id: v4(5).split('-')[0], title, price, stock, categoryID }
   myObject["products"].push(newProd);
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("New data added");
   });
   res.send(newProd);
}

const UpdateProduct = (req, res) => {
   const { id } = req.params
   const { title, price, stock, categoryID } = req.body

   if (!(title && price && stock && categoryID)) return res.send("invalid Inputs")

   let newProd = {}
   myObject["products"].forEach((prod) => {
      if (prod.id === id) {
         prod.title = title
         prod.price = price
         prod.stock = stock
         prod.categoryID = categoryID
         newProd = prod
      }
   })
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("Data updated");
   });
   res.send(newProd);

}


const DeleteProduct = (req, res) => {
   const { id } = req.params
   const newList = myObject["products"].filter((prod) => prod.id != id)
   myObject["products"] = newList
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("Delete product with id: " + id);
   });
   res.send(myObject['products']);
}

module.exports = { getAllProducts, getOneProduct, AddProduct, DeleteProduct, UpdateProduct }