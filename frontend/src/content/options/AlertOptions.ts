import { UserActionAlertOptionsType } from '@/types/UserActionAlertOptionsType'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBolt, faMobileScreen, faEnvelope, faHouseFloodWaterCircleArrowRight,
   faWater, faTemperatureHigh, faTemperatureLow,faArrowDown, faArrowUp, faDroplet, faBridgeWater} from '@fortawesome/free-solid-svg-icons'

const AlertOptionsFunc = () => {
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
  return {
    methodOptions:methodCopy,
    parameterOptions:parameterCopy,
    conditionalOptions:conditionalCopy
  }
}

export default AlertOptionsFunc