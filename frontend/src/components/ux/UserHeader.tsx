
import { Bell } from 'lucide-react'
import UserIcon from '../ui/UserIcon'
import { Progress } from "@/components/ui/progress"
import BellaAmount from '../ui/BellAmount'

const UserHeader = () => {
  return (
    <div className='  w-[96%] lg:w-full h-[160px] pb-[30px] z-[2] relative lg:h-[190px]
      lg:mt-[190px]  mt-[240px] bg-transparant px-[1%] md:px-[3%] flex flex-col gap-4 max-w-[1326px] 
       justify-center items-center lg:items-stretch lg:justify-between bg-warmgray100 lg:opacity-100 opacity-95 rounded-lg
        lg:bg-transparent pt-[70px] lg:pt-0 shadow-md lg:shadow-transparent '>
        <UserIcon />
       <div className='flex flex-col lg:flex-row justify-between gap-4 w-full lg:px-0 px-[5%] items-center'>
          <h3>God dag, Aleksander</h3>

          <div className=' flex w-full lg:w-fit gap-6 justify-between'>
              <div className='flex gap-1 w-fit flex-row items-center'>
                <Progress value={70} className=' w-[100px] shadow-sm' />
                <p>7/10</p>
              </div>
              <div className='flex gap-1 w-fit flex-row items-center'>
                <p>varslinger</p>
                <BellaAmount amount={4}/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default UserHeader