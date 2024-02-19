const parameterMap = (
    parameter:
    'Vannføring'|
    'Vannstand' |
    'Vanntemperatur'|
    'Lufttemperatur'|
    'Magasinvolum'|
    'Nedbør'
    ) => {
        
    const map = {
    Vannføring: ['m³/s', '1001'],
    Vannstand:['m','1000'],
    Vanntemperatur:['℃','1003'],
    Lufttemperatur:['℃','17'],
    Magasinvolum:['m³','1004'],
    Nedbør: ['??','1005']
}
return map[parameter]
}

export default parameterMap