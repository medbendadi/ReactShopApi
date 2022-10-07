const fs = require("fs");
const path = require("path");

const jsonPath = path.resolve(__dirname, "../data/data.json");

// Storing the JSON format data in myObject
var data = JSON.parse(fs.readFileSync(jsonPath));
var myObject = data;



const { v4 } = require('uuid')

const getAllProducts = (req, res) => {
   res.json(myObject)
   // res.send("Hello")
}


const getOneProduct = (req, res) => {
   const { id } = req.params
   const selectedItem = products.filter((prod) => prod.id == id)
   res.send(selectedItem)
}


const AddProduct = (req, res) => {
   const { title, status } = req.body
   const newProd = { id: v4(5).split('-')[0], title, status }
   myObject["products"].push(newProd);
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("New data added");
   });
   res.send(newData);
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
   res.send(myObject);
}

module.exports = { getAllProducts, getOneProduct, AddProduct, DeleteProduct }