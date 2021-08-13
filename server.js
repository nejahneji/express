const express=require('express')
var app = express() 
const fs = require('fs')

function time(req,res,next){
    var d= new Date() ;
    var today = d.getDay();
    var houre = d.getHours()
    if (1<=today && today<= 5 && 9 <= houre && houre <= 17){
        next()
    } else {
        res.send("<h1>NOOO</h1>")
    }
     //(1<=today && today<= 5 && 9 <= houre && houre <= 10) ? next() : res.send("<h1>noo</h1>")
}
app.use(time)

app.get('/', (req,res)=>{
    fs.readFile("./home.html", "utf-8", (err,data)=>{
        err? console.log(err) : res.send(data)
    })
})
app.get('/OurServices', (req,res)=>{
    fs.readFile("./OurServices.html", "utf-8", (err,data)=>{
        err? console.log(err) : res.send(data)
    })
})
app.get('/contact', (req,res)=>{
    fs.readFile("./contact.html", "utf-8", (err,data)=>{
        err? console.log(err) : res.send(data)
    })
})


const PORT = process.env.PORT || 5000
const server = app.listen(PORT, (err)=> err ? console.log(err) : console.log(`server is running on port ${PORT}` ))
