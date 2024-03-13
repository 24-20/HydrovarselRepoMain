import { parameterType } from "@/types/parameterType"

const parameterMap = (
    parameter:
    parameterType
    ) => {
        
    const map = {
    Vannføring: ['m³/s', '1001'],
    Vannstand:['m','1000'],
    Vanntemperatur:['℃','1003'],
    Lufttemperatur:['℃','17'],
    Magasinvolum:['m³','1004'],
    Nedbør: ['??','1005'],
    Grunnvannstemperatur: ['m','2015'],
    'Grunnvannsnivå - dyp under bakken':['m','5130']


}
return map[parameter]
}

export default parameterMap