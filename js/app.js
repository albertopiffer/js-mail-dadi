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
