import UserActionAlert from '@/components/ux/UserActionAlert'
import { DashboardUserAlertDataContext } from '@/pages/Dashboard'
import React, { useState } from 'react'

import AlertOptionsFunc from '../../options/AlertOptions'
import DialogAlert from '@/components/ux/DialogAlert'
import AlertInput from '@/components/ui/buttons/AlertInput'
import parameterMap from '@/maps/parameterMap'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton'
import { optionType } from '@/types/OptionType'
import { Percent } from 'lucide-react'
const AlertContent2Edit = (props:{updatedParams:optionType | null}) => {
    const [conditional2, setConditional2] = useState<'Øker'| 'Synker'>('Øker')
    const [timeFrame, setTimeFrame] = useState<'1 Time'| '6 Timer'>('6 Timer')
    const AlertOptions = AlertOptionsFunc()
    const userDatacontext = React.useContext(DashboardUserAlertDataContext)
    if (!userDatacontext) return
    
    return (
        <>
        <h2 className='flex items-center gap-2' >Prosentvis varsel<Percent size={20} /></h2>
        <div className=' flex items-center flex-col gap-6 flex-grow'>
            
            <div className=' 2xl:w-[80%] md:w-[85%] w-[90%] h-auto bg-card flex flex-wrap text-foreground gap-3 '>
                <span>Send meg en</span>
                <UserActionAlert setActiveOption={userDatacontext.setMethod} activeOption={userDatacontext.method} options={AlertOptions.methodOptions} title='Varslings metode' />
                <span>hvis</span>
                
                <UserActionAlert setActiveOption={userDatacontext.setParameter} activeOption={userDatacontext.parameter} options={props.updatedParams} title='Parameter' />

                <span>til</span>
                <DialogAlert />
                
                
                <UserActionAlert setActiveOption={setConditional2} activeOption={conditional2} options={AlertOptions.conditionalCopy2} title='Betingelse' />
                <span>med</span>
                
                <div className='flex gap-3'>
                    <AlertInput type='number' placeholder='000' update={userDatacontext.activateAlert} updateState={userDatacontext.setInputValue}/>
                    <span>%,</span>
                </div>
                <span>i løpet av</span>
                
                <UserActionAlert setActiveOption={setTimeFrame} activeOption={timeFrame} options={AlertOptions.timeFrameOptions} title='Tidsvindu' />
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

export default AlertContent2Edit