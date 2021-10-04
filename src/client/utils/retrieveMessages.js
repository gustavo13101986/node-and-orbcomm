const {URL, ID, PASS,  HOST, PORT, EQUIPO_1, EQUIPO_2, EQUIPO_3, EQUIPO_4} = require('../../../../credenciales/credencialesOrbcomm.js')
const igws = require('./igws')
const util = require('util')

let productionGateway = { host: HOST, port: PORT }
igws.setGateway(productionGateway)
let credentials = { accessID: ID, password: PASS }

async function retrieveMessages() {
    try {
        var result = await igws.retrieveMessages(credentials)
    }
    catch (err) {
        console.warn('retrieve messages error:', err)
        return
    }
    if (result.Messages) {
        for (let message of result.Messages) {
            console.info('retrieve status:', util.inspect(message, false, null, true))
            // console.log("mi latitud es este: ", message.Payload.Fields.latitude)
            // console.log("mi longitud es este: ", message.Payload.Fields.longitude)
            if(message.MobileID == EQUIPO_1.DESTI_1 && message.Payload.Fields.latitude){
                lat = message.Payload.Fields.latitude/60000
                lng = message.Payload.Fields.longitude/60000
                //console.log(message.MobileID, message.Payload.Fields.latitude)
                // peticiones.actualizar_posicion(lat, lng)
                console.log(lat, lng)
                
            }
        }
    }
    else {
        console.info('retrieve messages: none')
    }
}

module.exports= {
    retrieveMessages: retrieveMessages,
} 