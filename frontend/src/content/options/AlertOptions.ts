import { UserActionAlertOptionsType } from '@/types/UserActionAlertOptionsType'
import React from 'react'
import { faClock, faMobileScreen, faEnvelope, faHouseFloodWaterCircleArrowRight,
   faWater, faTemperatureHigh, faTemperatureLow,faArrowDown, faArrowUp, faDroplet, faBridgeWater} from '@fortawesome/free-solid-svg-icons'

const AlertOptionsFunc = () => {
    const CooldownCopy = [
        {
            value:'1 time',
            icon:faClock,
            
        },
        {
            value:'2 timer',
            icon:faClock
        },
        {
          value:'3 timer',
          icon:faClock,
          
      },
      {
          value:'4 timer',
          icon:faClock
      },
      {
        value:'5 timer',
        icon:faClock,
        
    },
    {
        value:'6 timer',
        icon:faClock
    },
    {
      value:'12 timer',
      icon:faClock,
      
    },
    {
      value:'24 timer',
      icon:faClock
    }
    
    
        ]
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
    const conditionalCopy2 = [
        {
            value:'Øker',
            icon:faArrowUp
        },
        {
            value:'Synker',
            icon:faArrowDown
        }
    ]
    const timeFrameCopy = [
        {
            value:'1 Time',
            icon:faClock
        }, 
        {
            value:'12 Timer',
            icon:faClock
        },
        {
            value:'1 Dag',
            icon:faClock
        },
        {
            value:'7 Dager',
            icon:faClock
        },
        {
            value:'31 Dager',
            icon:faClock
        },
    ]
  return {
    CooldownOptions:CooldownCopy,
    methodOptions:methodCopy,
    parameterOptions:parameterCopy,
    conditionalOptions:conditionalCopy,
    timeFrameOptions:timeFrameCopy,
    conditionalCopy2
  }
}

export default AlertOptionsFunc