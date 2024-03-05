import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faGear, faCheck } from '@fortawesome/free-solid-svg-icons'
import useDeviceWidth from '@/hooks/useDeviceWidth'
import DropdownAlert from '@/components/ux/DropdownAlert'
import DrawerAlert from '@/components/ux/DrawerAlert'
import AlertButton from '@/components/ui/AlertButton'
import AlertInput from '@/components/ui/AlertInput'
import { DashboardUserAlertDataContext } from '@/pages/Dashboard'
const AlertAdvancedContent = () => {
  
  const userDatacontext = React.useContext(DashboardUserAlertDataContext)
    const {device600px} = useDeviceWidth()
    const [checkbox, setCheckbox] = useState(false)
  if (!userDatacontext) return
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
    
  return (
    <div className='text-foreground flex flex-col items-center mb-10'>
        <h2 >Alternative Instillinger</h2>
        <div className='flex flex-col'>
          <div className='flex gap-4 '>
          <span>Nedkjøling:</span> 
          {
            device600px?
            <DrawerAlert options={CooldownCopy} title='Varslings metode' updateState={userDatacontext.setMethod} update={userDatacontext.activateAlert} updateInstant={false} />
            :
            <DropdownAlert options={CooldownCopy} title='Varslings metode' updateState={userDatacontext.setMethod} update={userDatacontext.activateAlert} updateInstant={false}/>
        }
          </div>
          <div className='flex gap-4 mt-6 '>
            <span>Legg til notat:</span> <AlertInput type='text' placeholder='Noter..' updateState={userDatacontext.setNote} update={userDatacontext.activateAlert} />
          </div>
        </div>
        <div className='flex items-center gap-4 h-8 sm:mt-10 mt-4 '>
          <div style={{backgroundColor:checkbox?'hsl(198.4 93.2% 59.6%)':''}} className={' opacity-85 w-5 h-5 bg-background border border-primary transition duration-200 flex justify-center items-center '}
           onClick={()=>{setCheckbox(!checkbox)}} ><FontAwesomeIcon icon={faCheck} size='sm' color={checkbox?'#fff':'#020817'} className='transition duration-200' /></div>
          <span className='m-0'>Slett varsel etter det aktiveres.</span>
        </div>
    </div>
  )
}

export default AlertAdvancedContent