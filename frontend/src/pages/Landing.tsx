import { sendSigninLinkUtil } from '@/firebase/firebaseUtils'
import React, { useState } from 'react'

const Landing = () => {
    const [email, setEmail] = useState('aleksander.a.sivertsen@gmail.com')
  return (
    <div >
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={()=>{
            console.log(email)
        sendSigninLinkUtil(email)
    }}>send link</button>
    </div>
  )

  
}

export default Landing