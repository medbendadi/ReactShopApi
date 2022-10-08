const fs = require("fs");
const path = require("path");

const jsonPath = path.resolve(__dirname, "../data/data.json");

// Storing the JSON format data in myObject
var data = JSON.parse(fs.readFileSync(jsonPath));
var myObject = data;

const { v4 } = require('uuid')


const getAllCommands = (req, res) => {
   res.json(myObject['commands'])
}


const getOneCommand = (req, res) => {
   const { id } = req.params
   const selectedItem = myObject['commands'].filter((item) => item.id == id)


   res.send(selectedItem[0])
}

const getCommandProducts = (req, res) => {
   res.status(200)
   const { id } = req.params
   let products = []
   const selectedItem = myObject['commands'].filter((item) => item.id == id)
   for (let i = 0; i < selectedItem[0]["products"].length; i++) {
      products = [...products, myObject['products'].filter((item) => item.id == selectedItem[0]["products"][i].id)[0]]
   }
   if (!products[0]) return res.send([])

   res.send(products)
}

const AddCommand = (req, res) => {
   const { client_name, telephone, address, products } = req.body
   if (!(client_name && telephone && address && products)) return res.send("invalid Inputs")

   const newProd = { id: v4(5).split('-')[0], client_name, telephone, address, products, status: "En Attente" }
   myObject["commands"].push(newProd);
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("New data added");
   });
   res.send(newData);
}

const UpdateCommandStatus = (req, res) => {
   const { id } = req.params;
   const { status } = req.body;
   if (!status) res.send("invalid Inputs")
   myObject["commands"].forEach((item) => {
      if (item.id == id) {
         item.status = status
      }
   })
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("Data updated");
   });
   res.send(myObject['commands']);
}

const UpdateCommandContent = (req, res) => {
   const { id } = req.params;
   const { client_name, telephone, address, products } = req.body
   if (!(client_name && telephone && address && products)) return res.send("invalid Inputs")

   myObject["commands"].forEach((item) => {
      if (item.id == id) {
         item.client_name = client_name
         item.telephone = telephone
         item.address = address
         item.products = products
      }
   })
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("Data updated");
   });
   res.send(myObject['commands']);
}


const DeleteCommand = (req, res) => {
   const { id } = req.params
   const newList = myObject["commands"].filter((item) => item.id != id)
   myObject["commands"] = newList
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("Delete product with id: " + id);
   });
   res.send(myObject['commands']);
}


module.exports = { getAllCommands, getOneCommand, AddCommand, getCommandProducts, UpdateCommandStatus, UpdateCommandContent, DeleteCommand }
