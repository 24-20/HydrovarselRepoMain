import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBolt, faMobileScreen, faEnvelope, faHouseFloodWaterCircleArrowRight,
   faWater, faTemperatureHigh, faTemperatureLow,faArrowDown, faArrowUp, faDroplet, faBridgeWater} from '@fortawesome/free-solid-svg-icons'

import { ChevronDown } from 'lucide-react'
import DropdownAlert from '@/components/alert/DropdownAlert'
import DrawerAlert from '@/components/alert/DrawerAlert'
import parameterMap from '@/maps/parameterMap'
import { DashboardRiverContext } from '@/pages/Dashboard'
import useDeviceWidth from '@/hooks/useDeviceWidth'
import { optionType } from '@/types/OptionType'
import Search from '@/components/alert/Search'
const AlertContent1 = () => {
    const [updatedParams, setUpdatedParams] = useState<optionType | null>(null)
    const context = React.useContext(DashboardRiverContext)
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
        if (!context?.DashboardRiver) return
        const seriesList = context.DashboardRiver.seriesList
        const newlist = []
        console.log(seriesList)
        for (let i in seriesList) {
            newlist.push(seriesList[i].parameterName)
        }
        setAvailableParams(newlist)
    },[context?.DashboardRiver])

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
    <h2>Enkel varsling</h2>
    <div className=' md:w-[85%] w-[90%] h-auto  bg-card flex flex-wrap text text-foreground gap-3 sm:text-lg'>
    <span>Send meg en</span>
        {
        device600px?
        <DrawerAlert options={methodCopy} title='Varslings metode'  />
        :
        <DropdownAlert options={methodCopy} title='Varslings metode' />
        }
        <span>hvis</span>
        {
        device600px?
        <DrawerAlert options={updatedParams} title='Parameter'  />
        :
        <DropdownAlert options={updatedParams} title='Parameter'   />
        }
        <span>til</span>
        <Search />
        <span>går</span>
        {
        device600px?
        <DrawerAlert options={conditionalCopy} title='Betingelse' />
        :
        <DropdownAlert options={conditionalCopy} title='Betingelse' />
        }
        <div className='flex gap-3'>
            <button>...</button>
            <span>Meter.</span>
        </div>
      
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