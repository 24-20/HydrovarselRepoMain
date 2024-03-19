
import { Bell } from 'lucide-react'
import UserIcon from '../ui/UserIcon'
import { Progress } from "@/components/ui/progress"
import BellaAmount from '../ui/BellAmount'
import { UserDataContext } from '@/layout/UserAuthLayout'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
const UserHeader = () => {
  const userdatacontext = useContext(UserDataContext)
  return (
    <div className='  w-[96%] lg:w-full h-[160px] pb-[30px] z-[2] relative lg:h-[190px]
      lg:mt-[190px]  mt-[240px] bg-transparant px-[1%] md:px-[3%] flex flex-col gap-4 max-w-[1326px] 
       justify-center items-center lg:items-stretch lg:justify-between bg-warmgray100 lg:opacity-100 opacity-95 rounded-lg
        lg:bg-transparent pt-[70px] lg:pt-0 shadow-md lg:shadow-transparent '>
        <UserIcon />
       <div className='flex flex-col lg:flex-row justify-between gap-4 w-full lg:px-0 px-[5%] items-center'>
          <h3>God dag, Aleksander</h3>

          <div className=' flex w-full lg:w-fit gap-6 justify-between'>
              <NavLink to={'/info'} className='flex gap-2 w-fit flex-row items-center bg-black/10 rounded-md px-4'>
                
                <Progress value={(userdatacontext?.userData?.notificationTriggeredCount?(10-userdatacontext?.userData?.notificationTriggeredCount):0)*10} className=' w-[100px] h-[8px] shadow-sm' />
                <h4>{userdatacontext?.userData?.notificationTriggeredCount?10-userdatacontext?.userData?.notificationTriggeredCount:'#'}{userdatacontext?.userData?.notificationTriggeredCount&& '/10'} </h4>
              </NavLink>
              <NavLink to={'/mine-varsel'} className='flex gap-2 w-fit flex-row items-center bg-black/10 rounded-md px-2'>
                <h4 className=' p-2'>Nye</h4>
                <BellaAmount amount={userdatacontext?.userData?.alertsNotOpenedAmount}/>
              </NavLink>
          </div>
        </div>
    </div>
  )
}

export default UserHeader