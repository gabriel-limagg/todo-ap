const express = require("express")
const exphbs = require ("expresss-handlebars")
const app = express()
app.engine('handlebars',exphbs.engine())
app.get('/',(requisiçao, resposta)=>{
    resposta.send("santos!")
})

app.listen(3000, ()=> {
    console.log("servidor rodando na porta 3000!")
})