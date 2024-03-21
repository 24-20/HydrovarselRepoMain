import MenuItemBig from '@/components/ui/menu/MenuItemBig'
import MenuItemSmall from '@/components/ui/menu/MenuItemSmall'
import { signInWithEandP, signOutUtil } from '@/firebase/firebaseUtils'
import { faHandshake, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SideMenuContent = () => {
  return (
    <div className=' w-full h-full flex flex-col gap-3 items-center mt-[100px]'>
        <MenuItemSmall to='/ny-varsel'>
            Ny varsel
        </MenuItemSmall>
        <MenuItemSmall to='/mine-varsel'>
            Mine varsler
        </MenuItemSmall>
        <MenuItemSmall to='/konto'>
            Konto
        </MenuItemSmall>
        <div className=' flex gap-2 w-10/12 h-fit mt-[40px]'>
        <MenuItemBig>
            Tilbakemelding
            <FontAwesomeIcon icon={faSmile}/>
        </MenuItemBig>
        <MenuItemBig>
            Partnere
            <FontAwesomeIcon icon={faHandshake}/>
        </MenuItemBig>
        </div>
        <button onClick={()=>signInWithEandP('test.mail@gmail.com', 'test123')}>Sign in</button>
        <button onClick={()=>signOutUtil()}>Sign out</button>
    </div>
  )
}

export default SideMenuContent