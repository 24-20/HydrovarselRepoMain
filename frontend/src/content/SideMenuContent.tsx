import MenuItemBig from '@/components/ui/MenuItemBig'
import MenuItemSmall from '@/components/ui/MenuItemSmall'
import { signInWithEandP } from '@/firebase/firebaseUtils'
import { faHandshake, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SideMenuContent = () => {
  return (
    <div className=' w-full h-full flex flex-col gap-3 items-center mt-[100px]'>
        <MenuItemSmall>
            Ny varsel
        </MenuItemSmall>
        <MenuItemSmall>
            Mine varsler
        </MenuItemSmall>
        <MenuItemSmall>
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
    </div>
  )
}

export default SideMenuContent