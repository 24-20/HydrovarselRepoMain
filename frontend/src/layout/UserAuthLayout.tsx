
import { ReactNode, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import {auth, db }from '../firebase/firebaseConfig'
import React from "react"
import {GetNotificationsUser, createUserForDb} from '../firebase/firebaseUtils'
import {getDoc, doc, onSnapshot} from 'firebase/firestore'
import { DocumentData } from "firebase/firestore"
import { userDataContextType } from "@/types/userDataContextType"

const userDataContext = React.createContext<userDataContextType | null>(null)
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const UserAuthLayout = ({children, className=''}:CardProps) => {
    const [authState, setAuthState] = useState<boolean>(false)
    const [userData, setuserData] = useState< DocumentData | undefined >(undefined)
    const [userUid, setUserUid] = useState<string | null>(null)
    const [userNotifications, setUserNotifications] = useState<null | {}[]>(null)
    //auth observer
    onAuthStateChanged(auth, ()=>{
        if (auth.currentUser) {
        setAuthState(true)
        } else {
        setAuthState(false)
        }
    })

  //fetching user data from Users collection in db 
  //if not found creating user in db
  useEffect(()=>{
    async function updateUserData(uid:string ) {
      const userDataCol = doc(db, 'Users',uid)
      const userDataSnapshot = await getDoc(userDataCol);
      if (!userDataSnapshot.exists()) {
        console.log('Creating user in db')
        setuserData(undefined)
        await createUserForDb(uid)
        updateUserData(uid)
      } else {
        console.log('--------------')
        console.log(userDataSnapshot.data())
        setuserData(userDataSnapshot.data())
      }
      
      
    }
    const uid = auth?.currentUser?.uid
    if (uid) {
        console.log(uid)
        setUserUid(uid)
        updateUserData(uid)
    }
    
  },[authState])

  useEffect(()=>{
    console.log('userdata: ',userData)
    async function getUserNotifications() {
        const data = await GetNotificationsUser(userData?.notificationIds)
        console.log(data)
    }
    if (userData) {
        getUserNotifications()
    }
  },[userData])
  

  return (
    <userDataContext.Provider value={{userData, authState, userUid}}>
        {children}
    </userDataContext.Provider>
  )
}

export default UserAuthLayout