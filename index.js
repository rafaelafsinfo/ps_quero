const express = require('express')
const cors = require('cors')


const Route_offers = require("./Router/Route_offers")
/*const Route_Instituicao = require("./router/Route_Instituicao")
const Route_Usuario = require("./router/Route_Usuario");
const Route_Locais = require('./router/Route_Locais');*/

const app = express()
app.use(express.static('js'));
app.use(express.json())
app.use(cors({
    origin: '*'
  }))


app.get('/helloworld' ,(req,res) => {
    return res.json({
        mensagem: 'Hello World'
    })
})

Route_offers(app)
/*Route_Instituicao(app,banco)
Route_Usuario(app,banco)
Route_Locais(app,banco)*/

app.listen(3000, () => {
    console.log('connect')
})