
import { AlertRiverType } from '@/types/AlertRiverType'
import { stationDataRawType } from './stationDataRawType'

export type DashboardUserAlertDataType = {
    setMethod:Function,
    method:'Sms'|'Email'
    setParameter:Function,
    setConditional:Function,
    conditional:'Over'| 'Under',
    setInputValue:Function,
    setCooldown:Function,
    setNote:Function,
    parameter:'Vannføring'|'Vannstand'| 'Vanntemperatur'| 'Lufttemperatur' | 'Magasinvolum' | 'Nedbør',
    setActivateAlert:Function,
    activateAlert:boolean

}