import UserActionAlert from '@/components/ux/UserActionAlert'
import { DashboardUserAlertDataContext } from '@/pages/Dashboard'
import React, { useEffect, useState } from 'react'

import AlertOptionsFunc from '../../options/AlertOptions'
import DialogAlert from '@/components/ux/DialogAlert'
import AlertInput from '@/components/ui/buttons/AlertInput'
import parameterMap from '@/maps/parameterMap'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton'
import { optionType } from '@/types/OptionType'
import { BookOpen } from 'lucide-react'
import { DashboardRiverContext } from '@/pages/Dashboard'
import { AlertType1Db } from '@/types/AlertTypesDb/AlertType1Db'
import { UserDataContext } from '@/layout/UserAuthLayout'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'
const AlertContent1Edit = (props:{updatedParams:optionType | null}) => {
    const { toast } = useToast()
    console.log('running alertcontent1')
    const [conditional, setConditional] = useState<'Over'| 'Under'>('Over')
    const [valueLevel, setValueLevel] = useState<string>('')
    const [userAlert1, setUserAlert1] = useState<null | AlertType1Db>(null)
    const [error, setError] = useState<1 | 2 | 3 | false>(false)
    const AlertOptions = AlertOptionsFunc()
    const dashboardRiverContext = React.useContext(DashboardRiverContext)
    const userAlertDatacontext = React.useContext(DashboardUserAlertDataContext)
    const userDataContext = React.useContext(UserDataContext)
    if (!userAlertDatacontext) return
    useEffect(()=>console.log(userAlert1),[userAlert1])
    useEffect(()=>{
        if (error) {
            const handler = setTimeout(() => {
                setError(false)
            }, 3000);
            return () =>{
                clearTimeout(handler)
            }
        }
    }, [error])
    return (
        <>
        <h2 className='flex items-center gap-2' >Enkel varsling <BookOpen size={20} /></h2>
        <div className=' flex items-center flex-col gap-6 flex-grow'>
            
            <div className=' 2xl:w-[80%] md:w-[85%] w-[90%] h-auto bg-card flex flex-wrap text-foreground gap-3 '>
                <span>Send meg en</span>
                <UserActionAlert setActiveOption={userAlertDatacontext.setMethod} activeOption={userAlertDatacontext.method} options={AlertOptions.methodOptions} title='Varslings metode' />
                <span>hvis</span>
                
                <UserActionAlert setActiveOption={userAlertDatacontext.setParameter} activeOption={userAlertDatacontext.parameter} options={props.updatedParams} title='Varslings metode' />

                <span>til</span>
                <DialogAlert />
                
                <span>går</span>
                <UserActionAlert setActiveOption={setConditional} activeOption={conditional} options={AlertOptions.conditionalOptions} title='Varslings metode' />

                
                <div className='flex gap-3'>
                    <AlertInput type='number' placeholder='000' state={valueLevel} updateState={setValueLevel}/>
                    <span>{parameterMap(userAlertDatacontext.parameter)[0]}</span>
                </div>
            
            </div>
            {
                error&&
                <p className=' text-destructive'>Varsel finnes ikke, legg in gyldig data, kode {error}</p>
            }
            <PrimaryButton >
                <div onClick={()=>{
                    console.log(userDataContext?.userData)
                    if (valueLevel ) { //checking if value passes requirements!!!
                        if (!dashboardRiverContext?.riverParameterDataTrue || !dashboardRiverContext.DashboardRiver) {
                            setError(2)
                            return
                        }
                        
                        if (!userDataContext?.authState) {
                            setError(3)
                            return
                        }
                        console.log('passed reqs')
                        setUserAlert1(
                            {
                                method:userAlertDatacontext.method,
                                parameter:userAlertDatacontext.parameter,
                                stationId:dashboardRiverContext.DashboardRiver.stationId,
                                condition:conditional,
                                valueLevel:valueLevel,
                                noteValue:userAlertDatacontext.note,
                                deleteAfterTrigger:userAlertDatacontext.deleteAfterTrigger,
                                cooldownAfterTrigger:userAlertDatacontext.cooldown, //6 Timer, 1 Dag
                                type:1,

                            }
                        )
                        toast({
                            variant: "destructive",
                            title: "Uh oh! Something went wrong.",
                            description: "There was a problem with your request.",
                            action: <ToastAction altText="Try again">Try again</ToastAction>,
                        })
                    } else {
                        setError(1)
                        
                    }
                }} className=' items-center flex flex-grow w-full h-full px-8'>
                Lagre varsel
                </div>
            </PrimaryButton>
        </div>
        </>
    
    )
}

export default AlertContent1Edit