import { parameterType } from "../parameterType"

export type AlertType1Db = {
    method:'Sms'|'Email' 
    parameter: parameterType
    stationId:string
    condition:'Over'| 'Under'
    valueLevel:string
    noteValue:string
    deleteAfterTrigger:boolean
    cooldownAfterTrigger:string //6 Timer, 1 Dag
    type:number
    email?:string
    sms?:string
}