
import UserIcon from '../ui/UserIcon'
import { Progress } from "@/components/ui/progress"

const UserHeader = () => {
  return (
    <div className='  w-screen lg:w-[calc(100vw_-_300px)] h-[300px] lg:h-[200px] absolute
     lg:ml-[300px] mt-[190px] bg-transparant px-[2%] '>
        <UserIcon />
       <div className='flex justify-between'>
        <h3>God dag, Aleksander</h3>
       
        
            <div className='flex gap-4 flex-row items-center'>
                
            <Progress value={70} className=' w-[140px] shadow-sm' />
            <p>Du har 7/10 varslinger igjen</p>
            </div>
        </div>
    </div>
  )
}

export default UserHeader