const { request } = require('express')

module.exports = function(app){
    
    const offers = require('../model/offers')
     app.get('/Offers',(request,response) => {
        const Offers = new offers()
        Offers.read().then((resultadosBanco) => {
            
            const resposta = {
                status: true,
                msg: 'Executado com sucesso',
                dados: resultadosBanco.map((item)=>{
                        const newdata = [
                            /*item.fullprice = `R$ ${item.fullprice.replace('.', ',')}`,
                            item.offeredprice = `R$ ${item.offeredprice.replace('.', ',')}`,
                            item.discount = `${(((fullPrice - offeredPrice) / fullPrice) * 100).toFixed(0)}% 📉`,*/
                            item.kind == 'presencial' ? 'Presencial 🏫' : 'EaD 🏠'
                        
                        ]
                }),
                codigo: '003'
            }
            response.status(200).send(resposta)
        }).catch((erro) => {
            const resposta = {
                status: false,
                codigo: '004',
                msg: 'erro ao executar',
                dados: erro
              }
              console.error(erro)
              response.status(200).send(resposta)
        })
     })
}