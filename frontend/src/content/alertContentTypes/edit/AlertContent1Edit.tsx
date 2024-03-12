import UserActionAlert from '@/components/ux/UserActionAlert'
import { DashboardUserAlertDataContext } from '@/pages/Dashboard'
import React, { useState } from 'react'

import AlertOptionsFunc from '../../options/AlertOptions'
import DialogAlert from '@/components/ux/DialogAlert'
import AlertInput from '@/components/ui/buttons/AlertInput'
import parameterMap from '@/maps/parameterMap'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton'
import { optionType } from '@/types/OptionType'
import { BookOpen } from 'lucide-react'
const AlertContent1Edit = (props:{updatedParams:optionType | null}) => {
    
    const [conditional, setConditional] = useState<'Over'| 'Under'>('Over')
    const AlertOptions = AlertOptionsFunc()
    const userDatacontext = React.useContext(DashboardUserAlertDataContext)
    if (!userDatacontext) return
    
    return (
        <>
        <h2 className='flex items-center gap-2' >Enkel varsling <BookOpen size={20} /></h2>
        <div className=' flex items-center flex-col gap-6 flex-grow'>
            
            <div className=' 2xl:w-[80%] md:w-[85%] w-[90%] h-auto bg-card flex flex-wrap text-foreground gap-3 '>
                <span>Send meg en</span>
                <UserActionAlert setActiveOption={userDatacontext.setMethod} activeOption={userDatacontext.method} options={AlertOptions.methodOptions} title='Varslings metode' />
                <span>hvis</span>
                
                <UserActionAlert setActiveOption={userDatacontext.setParameter} activeOption={userDatacontext.parameter} options={props.updatedParams} title='Varslings metode' />

                <span>til</span>
                <DialogAlert />
                
                <span>går</span>
                <UserActionAlert setActiveOption={setConditional} activeOption={conditional} options={AlertOptions.conditionalOptions} title='Varslings metode' />

                
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

export default AlertContent1Edit