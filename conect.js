const { makeInMemoryStore, DisconnectReason, delay 
} = require('@adiwajshing/baileys');

const { hx, fs, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, createExif, wait, getRandom, banner2, start2, banner3, infopd, success, start, close, temporizador, kyun, state, SaveState, P } = require('./consts-func.js')


const { startAle } = require("./index.js")

console.log(banner3.string)   
console.log(banner2.string)

async function conpdate () {
module.exports = conn = async (conn, update) => {
try {
const { connection, lastDisconnect, qr, isNewLogin } = update
if(qr) {
console.log(color("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

if(connection === 'close') {
  
if((lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut) {
startAle()
} else if(connection == "open") {
console.log('Conexão fechada, agora está tudo ok.')
}  
  
if(String(lastDisconnect.error).includes("Stream Errored")) {
console.log(color("Stream Errored, pode está conectado em outra sessão o bot ou foi reiniciado, se continuar com essa mensagem repetindo, force a parada do termux, abra novamente e ligue, caso contrário ignore...", "yellow"))
} else if(String(lastDisconnect.error).includes("Connection Failure")) {
exec("rm baileys_store_multi.json")  
exec("rm auth_info_multi.json")
console.log(color("QRCODE ESTÁ MORTO, NÃO ESCANEOU CORRETAMENTE OU ELE DESCONECTOU DO WHATSAPP, IREI APAGAR ELE E GERAR UM NOVO QRCODE, BOA SORTE..", "red"))
process.exit()
} else if(String(lastDisconnect.error).includes("Restart Required")) {
console.log(color("Reinicie se for nescessario, Escaneie o Qrcode em um ambiente escuro faz com que o foco da câmera seja melhor, caso não conectar o qrcode, só seguir esse procedimento básico..", "yellow"))
} else if(String(lastDisconnect.error).includes("Connection was lost")){
console.log(color("Sua conexão está fraca, jaja volta ao normal..", "yellow"))
} else if(String(lastDisconnect.error).includes("Connection Terminated")){
console.log(color("Conexão está querendo terminar, mas não tem problema, em breve reconecta.."))
} else {
console.log('Conexão fechada devido a ', lastDisconnect.error, ', Reconectar ', shouldReconnect)
}

} else if(connection === "open") {
console.log(color(
`ALEATORY MD 2.0 CONECTADO COM SUCESSO..`))
}


} catch (e) {
if(String(e).includes("Bad MAC Error")){
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("Key used already or never")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else {
console.log(color(e, "red"))  
}
}

}

} 

conpdate().catch(e => {console.log(color(e, "red"))})