
const express = require ('express');



const CustomerDataController = require ('../Controllers/CustomerData');
const ProjectDataController = require ('../Controllers/ProjectData');


//assigning router the functionality of distributing  the incoming requests to specified APIs...>> from express package
var route = express.Router();
//GET method use

route.get('/CustomerData/:progId', CustomerDataController.getCustomerDataByprogId);

//POST metho use
route.post('/CustomerData/:progId', CustomerDataController.addCustomerData);

//DELETE method use
route.delete('/ProjectData/:progId', ProjectDataController.deleteProjectDatabyId);// specifies the api pathname


//export every available path of API to app.js
module.exports = route;