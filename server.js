const express = require("express")
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.static("resources/html files/html-adven/"))
app.use('css/',express.static(__dirname + 'resources/html files/html-adven/css'))
app.use('images/', express.static(__dirname + 'resources/html files/html-adven/images'))

app.get('/', function (request, response) {

    response.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile("./resources/html files/html-adven/index.html", null , function(error,data) {
        if(error){
            response.writeHead(404)
            response.write('File Not Found')
        }else{
            response.write(data)
        }
        response.end()
    })

})

app.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`)
})

