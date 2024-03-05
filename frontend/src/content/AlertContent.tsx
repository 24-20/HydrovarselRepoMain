import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBolt, faMobileScreen, faEnvelope, faHouseFloodWaterCircleArrowRight,
   faWater, faTemperatureHigh, faTemperatureLow,faArrowDown, faArrowUp, faDroplet, faBridgeWater} from '@fortawesome/free-solid-svg-icons'

import { ChevronDown } from 'lucide-react'
import DropdownAlert from '@/components/ux/DropdownAlert'
import DrawerAlert from '@/components/ux/DrawerAlert'
import parameterMap from '@/maps/parameterMap'
import { DashboardRiverContext } from '@/pages/Dashboard'
import useDeviceWidth from '@/hooks/useDeviceWidth'
import { optionType } from '@/types/OptionType'

import DialogAlert from '@/components/ux/DialogAlert'
import PrimaryButton from '@/components/ui/PrimaryButton'
import AlertInput from '@/components/ui/AlertInput'
import { DashboardUserAlertDataContext } from '@/pages/Dashboard'
const AlertContent1 = () => {
    const userDatacontext = React.useContext(DashboardUserAlertDataContext)
    
    const riverDatacontext = React.useContext(DashboardRiverContext)
    
    if (!userDatacontext) return
    const [updatedParams, setUpdatedParams] = useState<optionType | null>(null)
    const [availableParams, setAvailableParams] = useState<undefined | string[]>()
    const {device600px} = useDeviceWidth()
    const methodCopy = [
        {
            value:'Email',
            icon:faEnvelope,
            
        },
        {
            value:'SMS',
            icon:faMobileScreen
        }
        ]
    const parameterCopy = [
        {
            value:'Vannføring',
            icon:faHouseFloodWaterCircleArrowRight
        },
        {
            value:'Vannstand',
            icon:faWater
        },
        {
            value:'Vanntemperatur',
            icon:faTemperatureHigh
        },
        {
            value:'Lufttemperatur',
            icon:faTemperatureLow
        },
        {
            value:'Magasinvolum',
            icon:faBridgeWater
        }, 
        {
            value:'Nedbør',
            icon:faDroplet
        }
    ]
    const conditionalCopy = [
        {
            value:'Over',
            icon:faArrowUp
        },
        {
            value:'Under',
            icon:faArrowDown
        }
    ]
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
        for (let i = 0; i<parameterCopy.length;i++) {
            for (let j = 0; j<availableParams.length;j++) {
                if (parameterCopy[i].value === availableParams[j]) {
                    updatedpar.push(parameterCopy[i])
                }
            }
        }
        setUpdatedParams(updatedpar)

    }, [availableParams])

  return (
    <>
    <h2 >Enkel varsling</h2>
    <div className=' flex items-center flex-col gap-6 flex-grow'>
        
        <div className=' 2xl:w-[80%] md:w-[85%] w-[90%] h-auto bg-card flex flex-wrap text-foreground gap-3 '>
            <span>Send meg en</span>
            {
            device600px?
            <DrawerAlert update={userDatacontext.activateAlert} updateState={userDatacontext.setMethod} updateInstant={false} options={methodCopy} title='Varslings metode'  />
            :
            <DropdownAlert update={userDatacontext.activateAlert} updateState={userDatacontext.setMethod} updateInstant={false} options={methodCopy} title='Varslings metode' />
            }
            <span>hvis</span>
            {
            device600px?
            <DrawerAlert update={userDatacontext.activateAlert} updateState={userDatacontext.setParameter} updateInstant={true} options={updatedParams} title='Parameter'  />
            :
            <DropdownAlert update={userDatacontext.activateAlert} updateState={userDatacontext.setParameter} updateInstant={true} options={updatedParams} title='Parameter'   />
            }
            <span>til</span>

            <DialogAlert />

            
            <span>går</span>
            {
            device600px?
            <DrawerAlert update={userDatacontext.activateAlert} updateState={userDatacontext.setConditional} updateInstant={false} options={conditionalCopy} title='Betingelse' />
            :
            <DropdownAlert update={userDatacontext.activateAlert} updateState={userDatacontext.setConditional} updateInstant={false} options={conditionalCopy} title='Betingelse' />
            }
            <div className='flex gap-3'>
                <AlertInput type='number' placeholder='000' update={userDatacontext.activateAlert} updateState={userDatacontext.setInputValue}/>
                <span>{parameterMap(userDatacontext.parameter)[0]}</span>
            </div>
        
        </div>
        <PrimaryButton >
            <div onClick={()=>userDatacontext.setActivateAlert(true)} className=' items-center flex flex-grow w-full h-full px-8'>
            Lagre varsel
            </div>
        </PrimaryButton>
    </div>
    </>

  )
}
const AlertContent2 = () => {
    return (
      <div className=' w-[96%] h-auto min-h-52 bg-background'>AlertContent</div>
    )
}
const AlertContent3 = () => {
return (
    <div className=' w-[96%] h-auto min-h-52 bg-background'>AlertContent</div>
)
}
export  {AlertContent1, AlertContent2, AlertContent3}