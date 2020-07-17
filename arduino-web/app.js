let app = require('express')()
let express = require('express')

app.use(express.static(__dirname + '/public'))

let http = require('http').Server(app)
let io = require('socket.io')(http)

app.get('/', function(req, res) {
    res.sendfile('public/index.html')
})

const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline
const port = new SerialPort('/dev/ttyACM0')
const parser = new Readline()

port.pipe(parser)
parser.on('data', function(data) {
    io.emit('dadoArduino', {
        valor: data,
    })
})

io.on('connection', function(socket) {
    console.log('Um usuário está conectado!')
})

http.listen(3000, function() {
    console.log('O servidor está em 3000')
})
