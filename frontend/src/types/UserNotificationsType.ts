export type UserNotificationsType = {
    alertVal:string
    condition:'Over'| 'Under'
    cooldown:string
    deleteAfterTrigger:string
    method:'Sms'|'Email'
    parameter:'Vannføring'|'Vannstand'| 'Vanntemperatur'| 'Lufttemperatur' | 'Magasinvolum' | 'Nedbør'
    river:string
    [key: string]:string
  };