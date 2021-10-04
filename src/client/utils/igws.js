// IGWS2 gateway functions

const https = require('https')
const querystring = require('querystring')
const util = require('util')

const urlprefix = '/GLGW/2/RestMessages.svc/JSON/'

let setGateway = function (newGateway) {
    gateway = newGateway
}

let compressFields = function (input) {
    let output = { }
    for (let fieldIndex in input) {
        let field = input[fieldIndex]
        if (field.Value != null) {
            switch (field.Type) {
                case 'signedint':
                case 'unsignedint':
                    output[field.Name] = Number(field.Value)
                    break
                default:
                    output[field.Name] = field.Value
                    break
        }
        } else if (field.Elements != null) {
            let outputElements = [ ]
            for (let elementIndex in field.Elements) {
                let element = field.Elements[elementIndex]
                outputElements[element.Index] = compressFields(element.Fields)
            }
            output[field.Name] = outputElements
        }
    }
    return output
}

let retrieveMessages = function (credentials, callback) {
    //console.log(credentials)
    if (credentials.messageTime == null) {    // Inicialmente credentals no tiene la fecha, pero con esto se garantiza que en el segundo llamado ya la tenga
        // we don't have a start time yet, so get it from the gateway to use next time
        getTime(credentials, function (err, time) {
            if (err) {
                callback(err)
                return
            }
            credentials.messageTime = time
            credentials.statusTime = time
            callback(null, { ErrorID: 0 })
            //console.log( credentials.messageTime) // Podemos ver la hora en consola
        })
        return
    }
    let args = {
        access_id: credentials.accessID,
        password: credentials.password,
        start_utc: credentials.messageTime,
        include_type: true
    }
    let options = {
        host: gateway.host,
        port: gateway.port,
        path: urlprefix + 'get_return_messages/?' + querystring.stringify(args),
        method: 'GET',
    }
   
    let req = https.request(options, function (res) {
        let msg = ''
        res.setEncoding('utf8')
        //console.log(res.setEncoding('utf8'))
        res.on('data', function (chunk) {
            msg += chunk
            //console.log(msg) /////////////////////////////////////////////////////// msg
        })
        res.on('end', function () {
            let response = JSON.parse(msg)
            //console.log(response)///////77//////////////////////////////////////////////////////////////////////////////////////////

            if (response == null) {
                callback('JSON parse error')
            } else {
                if (response.NextStartUTC) {
                    credentials.messageTime = response.NextStartUTC
                }
                if (response.Messages != null) {
                    // compress all the message fields
                    response.Messages.forEach(function (message) {
                        if (message.Payload && message.Payload.Fields) {
                            message.Payload.Fields = compressFields(message.Payload.Fields)
                        }
                    })
                }
                callback(null, response)
            }
        })
    })
    req.on('error', function (err) {
        callback(err)
    })
    req.end()
}

let getTime = function (credentials, callback) {
    let args = {
        access_id: credentials.accessID,
        password: credentials.password
    }
    let options = {
        host: gateway.host,
        port: gateway.port,
        path: urlprefix + 'igws_information/?' + querystring.stringify(args),
        method: 'GET',
    }
    let req = https.request(options, function (res) {
        let msg = ''
        res.setEncoding('utf8')
        res.on('data', function (chunk) {
            msg += chunk
        })
        res.on('end', function () {
            try {
                let result = JSON.parse(msg)
                let time = result.UTC
                callback(null, time)
            }
            catch (err) {
                callback(err, null)
            }
        })
    })
    req.on('error', function(err) {
        callback(err)
    })
    req.end()
}

module.exports = {
    setGateway: setGateway,
    getTime: util.promisify(getTime),
    retrieveMessages: util.promisify(retrieveMessages)
}