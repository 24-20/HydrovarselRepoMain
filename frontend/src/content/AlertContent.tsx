import React, { useEffect, useState } from 'react'

import { DashboardRiverContext } from '@/pages/Dashboard'
import { optionType } from '@/types/OptionType'

import { DashboardUserAlertDataContext } from '@/pages/Dashboard'
import AlertContent1Edit from './alertContentTypes/edit/AlertContent1Edit'
import AlertOptionsFunc from './options/AlertOptions'
import AlertContent2Edit from './alertContentTypes/edit/AlertContent2Edit'
import AlertContent3Edit from './alertContentTypes/edit/AlertContent3Edit'
const AlertContent = (props:{index:number}) => {
    const userDatacontext = React.useContext(DashboardUserAlertDataContext)
    const AlertOptions = AlertOptionsFunc()
    const riverDatacontext = React.useContext(DashboardRiverContext)
    
    if (!userDatacontext) return
    const [updatedParams, setUpdatedParams] = useState<optionType | null>(null)
    const [availableParams, setAvailableParams] = useState<undefined | string[]>()
    useEffect(()=>{ // updating available params
        if (!riverDatacontext?.DashboardRiver) return
        const seriesList = riverDatacontext.DashboardRiver.seriesList
        const newlist = []
        for (let i in seriesList) {
            newlist.push(seriesList[i].parameterName)
        }
        setAvailableParams(newlist)
    },[riverDatacontext?.DashboardRiver])

    useEffect(() => { // updating updated params when available params has been updated
        if (!availableParams) return
        let updatedpar:{icon:any, value:string}[] = []
        for (let i = 0; i<AlertOptions.parameterOptions.length;i++) {
            for (let j = 0; j<availableParams.length;j++) {
                if (AlertOptions.parameterOptions[i].value === availableParams[j]) {
                    updatedpar.push(AlertOptions.parameterOptions[i])
                }
            }
        }
        setUpdatedParams(updatedpar)

    }, [availableParams])
    
   
    if (props.index === 0) {
        return (
            <AlertContent1Edit updatedParams={updatedParams}/>
        
        )
    } else if (props.index === 1) {
        return <AlertContent2Edit updatedParams={updatedParams}/>
    } else if (props.index === 2) {
        return <AlertContent3Edit updatedParams={updatedParams}/>
    }

}

    
    
    


export  {AlertContent}