//MAIL

//creo array di mail
//creo una variabile check = 0 per aiutarmi nel controllo successivo
//creo un ciclo che scansiona tutto l'array confrontando la mail ottenuta col prompt co ogni elemento ed eventualmente modificando il valore di check a 1
//stampo un messaggio positivo se check = 1, negativo se check = 0

const mailList = [
    'PasqualinaMazzanti@gmalil.com',
    'PalmiraPalermo@gmalil.com',
    'PlacidoPiccio@gmalil.com',
    'LiviaMoretti@gmalil.com',
    'AchilleBaresi@gmalil.com',
    'RomildaLucchese@gmalil.com',
    'AmbraMilani@gmalil.com',
    'Fiorella Ferrari@gmalil.com',
    'RosettaLoDuca@gmalil.com',
    'AmedeoSabbatini@gmalil.com',
    'DomenicoGreece@gmalil.com',
    'LealdoToscani@gmalil.com',
    'SettimoMoretti@gmalil.com',
    'GustavoBarese@gmalil.com',
    'CaioCattaneo@gmalil.com',
    'GenerosaDavide@gmalil.com',
    'TeodataRomani@gmalil.com',
    'IreneoRomani@gmalil.com',
    'TarquiniaBoni@gmalil.com',
    'BuroMomento@gmalil.com'
]

console.log(mailList)

let mail = prompt('inserire mail: ')
let check = parseInt (0)

for (let i=0; i<mailList.length; i++) {
    if (mail === mailList[i]) { check = 1 }
}

if (check == 1) {
    console.log('Mail verificata')
}
else {
    console.log('Mail non verificata')
}

//DADI

//creo due variabili intere contenenti un int random <=6
//le confronto in un if e stabilisco qual'è la maggiore decretando il vincitore
//aggiungo una verifica per il pareggio

let dadoGiocatore = parseInt (Math.floor(Math.random() * 6) + 1)
console.log(dadoGiocatore)

let dadoComputer = parseInt (Math.floor(Math.random() * 6) + 1)
console.log(dadoComputer)

if (dadoGiocatore == dadoComputer) {
    console.log('pareggio')
}
else {
    if (dadoGiocatore > dadoComputer) { console.log('giocatore vince') }
    if (dadoGiocatore < dadoComputer) { console.log('computer vince') }
}
