import UserActionAlert from '@/components/ux/UserActionAlert'
import { DashboardUserAlertDataContext } from '@/pages/Dashboard'
import React, { useEffect, useState } from 'react'

import AlertOptionsFunc from '../../options/AlertOptions'
import DialogAlert from '@/components/ux/DialogAlert'
import AlertInput from '@/components/ui/buttons/AlertInput'
import parameterMap from '@/maps/parameterMap'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton'
import { optionType } from '@/types/OptionType'
import { BookOpen, X } from 'lucide-react'
import { DashboardRiverContext } from '@/pages/Dashboard'
import { AlertType1Db } from '@/types/AlertTypesDb/AlertType1Db'
import { UserDataContext } from '@/layout/UserAuthLayout'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

import PulseLoader from "react-spinners/PulseLoader";
import { AddAlertToDb1, updateNotificationsIdUser } from '@/firebase/firebaseUtils'
const AlertContent1Edit = (props:{updatedParams:optionType | null}) => {
    const { toast } = useToast()
    const [conditional, setConditional] = useState<'Over'| 'Under'>('Over')
    const [valueLevel, setValueLevel] = useState<string>('')
    const [userAlert1, setUserAlert1] = useState<null | AlertType1Db>(null)
    const [error, setError] = useState<1 | 2 | 3 | false>(false)
    const AlertOptions = AlertOptionsFunc()
    const dashboardRiverContext = React.useContext(DashboardRiverContext)
    const userAlertDatacontext = React.useContext(DashboardUserAlertDataContext)
    const userDataContext = React.useContext(UserDataContext)
    if (!userAlertDatacontext) return
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
    useEffect(()=>{
        async function handleAddAlert() {
            const alertId = await AddAlertToDb1(userAlert1 as AlertType1Db)
            console.log(alertId)
            updateNotificationsIdUser(userDataContext?.userUid as string,alertId)
        }
        if (userAlert1) {
            handleAddAlert()
        }
    },[userAlert1])
    return (
        <>
        <h2 className='flex items-center gap-2' >Enkel varsel <BookOpen size={20} /></h2>
        <div className=' flex items-center flex-col gap-6 flex-grow'>
            
            <div className=' 2xl:w-[80%] md:w-[85%] w-[90%] h-auto bg-card flex flex-wrap text-foreground gap-3 transition-all  '>
                <span>Send meg en</span>
                <UserActionAlert setActiveOption={userAlertDatacontext.setMethod} activeOption={userAlertDatacontext.method} options={AlertOptions.methodOptions} title='Varslings metode' />
                <span>hvis</span>
                
                <UserActionAlert setActiveOption={userAlertDatacontext.setParameter} activeOption={userAlertDatacontext.parameter} options={props.updatedParams} title='Varslings metode' />

                <span>ved</span>
                <DialogAlert />
                
                <span>går</span>
                <UserActionAlert setActiveOption={setConditional} activeOption={conditional} options={AlertOptions.conditionalOptions} title='Varslings metode' />

                
                <div className='flex gap-3'>
                    <AlertInput type='number' placeholder='000' state={valueLevel} updateState={setValueLevel} invalid={error === 1}/>
                    <span>{parameterMap(userAlertDatacontext.parameter)[0]}</span>
                </div>
            
            </div>
            {
                (error === 1)&&
                <p className=' text-destructive'>legg in gyldig data, kode {error}</p>
            }
            {
                (error === 2)&&
                <p className=' text-destructive'>vannstasjon med parameter ikke gyldig, kode {error}</p>
            }
            {
                (error === 3)&&
                <p className=' text-destructive'>Bruker er ikke logget på, kode {error}</p>
            }
            <PrimaryButton >
                <div onClick={()=>{
                    if (!userAlertDatacontext.alertLoading) {

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
                            userAlertDatacontext.setAlertLoading(true)
                            setError(false)
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
                                    email:'aleksander.a.sivertsen@gmail.com',
                                    sms:'95656565'

                                }
                            )
                            
                            setTimeout(() => {
                                userAlertDatacontext.setAlertLoading(false)
                                toast({
                                    variant: "success",
                                    title: "Suksess!",
                                    description: "Enkel varsling ble lagt til!",
                                    action: <ToastAction altText="Angre varsel">Angre varsel <X size={16} /></ToastAction>,
                                })
                                setValueLevel('')
                            }, 1000);
                    } else {
                        setError(1)
                    }


                    }
                }} className=' items-center flex flex-grow w-full h-full px-8'>
                {
                    userAlertDatacontext.alertLoading?
                    <PulseLoader color='white' size={8}/>
                    :
                    <div>Lagre varsel</div>
                }
                </div>
            </PrimaryButton>
        </div>
        </>
    
    )
}

export default AlertContent1Edit