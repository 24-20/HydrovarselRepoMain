import { parameterType } from "./parameterType"

export type DashboardUserAlertDataType = {
    setMethod:Function,
    method:'Sms'|'Email'
    setParameter:Function,
    setConditional:Function,
    conditional:'Over'| 'Under',
    setCooldown:Function,
    setNote:Function,
    note:string,
    parameter:parameterType,
    cooldown:string,
    setDeleteAfterTrigger:Function,
    deleteAfterTrigger:boolean,
    alertLoading:boolean,
    setAlertLoading:Function


}