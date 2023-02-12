const express = require("express")
const app = express ();
const routes = require ('./Routes/Routes')


app.set("view engine","ejs")
app.use('/', routes);
app.use(express.json());

 app.get("/",(req,res) => {
    console.log ("Server is running ")
    res.render("index",{text:"world"})

});


app.listen(3000, ()=>{
    
        console.log ("Server is running ")
})

