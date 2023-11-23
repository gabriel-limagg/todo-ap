const express = require("express")

const app = express()

app.get('/',(requisiçao, resposta)=>{
    resposta.send("santos!")
})

app.listen(3000, ()=> {
    console.log("servidor rodando na porta 3000!")
})