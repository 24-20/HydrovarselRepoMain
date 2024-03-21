
import { ArrowLeft, ArrowRight, Bell, RefreshCcw } from 'lucide-react'
import UserIcon from '../ui/UserIcon'
import { Progress } from "@/components/ui/progress"
import BellaAmount from '../ui/BellAmount'
import { UserDataContext } from '@/layout/UserAuthLayout'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { sendSigninLinkUtil } from '@/firebase/firebaseUtils'
import PulseLoader from 'react-spinners/PulseLoader'
const UserHeader = () => {
  const userdatacontext = useContext(UserDataContext)
  
  const [email, setEmail] = useState('')
  const [emailValidating, setEmailValidating] = useState<boolean>(false)
  const [emailSent, setEmailSent] = useState<boolean>(false)
  useEffect(()=>{
    if (emailValidating) {
      setTimeout(() => {
        try {
          console.log(email)
          sendSigninLinkUtil(email)
        } catch (error) {
          console.log(error)
        }
        setEmailSent(true)
        setEmailValidating(false)
      }, 1000);
      
    }
  },[emailValidating])
  return (
    <div className='  w-[96%] lg:w-full h-[160px] pb-[30px] z-[2] relative lg:h-[190px]
      lg:mt-[190px]  mt-[240px] bg-transparant px-[12px] md:px-[3%] flex flex-col gap-4 max-w-[1326px] 
       justify-center items-center lg:items-stretch lg:justify-between bg-warmgray100 lg:opacity-100 opacity-95 rounded-lg
        lg:bg-transparent pt-[70px] lg:pt-0 shadow-md lg:shadow-transparent '>
        { (userdatacontext?.authState === true)&&
          <>
          <UserIcon />
          <div className='flex flex-col lg:flex-row justify-between gap-4 w-full lg:px-0 px-[5%] items-center'>
              <h3>God dag, Aleksander</h3>

              <div className=' flex w-full lg:w-fit gap-6 justify-between'>
                  <NavLink to={'/info'} className='flex gap-2 w-fit flex-row items-center bg-black/10 rounded-md px-4'>
                    
                    <Progress value={(userdatacontext?.userData?.notificationTriggeredCount?(10-userdatacontext?.userData?.notificationTriggeredCount):10)*10} className=' w-[100px] h-[8px] shadow-sm' />
                    <h4>{userdatacontext?.userData?.notificationTriggeredCount?10-userdatacontext?.userData?.notificationTriggeredCount:10}/10 </h4>
                  </NavLink>
                  <NavLink to={'/mine-varsel'} className='flex gap-2 w-fit flex-row items-center bg-black/10 rounded-md px-2'>
                    <h4 className=' p-2'>Nye</h4>
                    <BellaAmount amount={userdatacontext?.userData?.alertsNotOpenedAmount}/>
                  </NavLink>
              </div>
            </div>  
          </>
        }
        
        { (userdatacontext?.authState === false )&& //if user is not logged in
          <div className=' lg:mt-[110px]'>
            { 
              emailValidating? //if user has sent in email and its validating
              <div>
                <h4>Et øyeblikk...</h4>
                <PulseLoader />
              </div>
            :
            <>
              {
                emailSent? //if email has been sent
                  <div className=' flex flex-col lg:flex-row items-center justify-between gap-4'>
                    <h4>Din verifiseringsmail er sendt.</h4>
                    <div className='lg:mb-0 mb-6 text-black border-b border-black flex gap-2 items-center cursor-pointer absolute top-10 left-10' onClick={()=>setEmailSent(false)}>Prøv annen email  <ArrowLeft size={18}/></div>
                    <div className='lg:mb-0 mb-6 text-blue-600 border-b border-blue-600 flex gap-2 items-center cursor-pointer'>Mottok ingen email, send igjen <RefreshCcw size={18}/></div>
                    
                  </div>
                  : //if user has not sent in email
                  <div className=' lg:flex-row-reverse flex flex-col items-center justify-end gap-4'>
                    <h4 > vi logger deg inn, eller lager en ny bruker</h4>
                    <div className='flex h-fit w-fit'>
                      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" autoCorrect="off" autoCapitalize="off" autoComplete='email' placeholder='SKRIV INN EMAIL' className='lg:mb-0 mb-6 text-lg p-2 rounded-none w-[250px] outline-none border border-black'
                      />  
                      <div className='lg:mb-0 mb-6 bg-white outline-none border border-black w-[60px] flex items-center justify-center border-l-white'
                      onClick={()=>{
                        setEmailValidating(true)
                      }}><ArrowRight  /></div>
                    </div>
                  </div>  
              }
            </>
            }
          </div>
        }
    </div>
  )
}

export default UserHeader