
import { ReactNode, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import {auth, db }from '../firebase/firebaseConfig'
import React from "react"
import {GetNotificationsUser, createUserForDb, signOutUtil} from '../firebase/firebaseUtils'
import {getDoc, doc, onSnapshot} from 'firebase/firestore'
import { DocumentData } from "firebase/firestore"
import { userDataContextType } from "@/types/userDataContextType"
import { UserNotificationsType } from "@/types/UserNotificationsType"

const UserDataContext = React.createContext<userDataContextType | null>(null)
interface CardProps {
    children:ReactNode 
    className?:string // 👈️ marked optional
  }
const UserAuthLayout = ({children, className=''}:CardProps) => {
    const [authState, setAuthState] = useState<boolean | 'loading'>('loading')
    const [userData, setuserData] = useState< DocumentData | undefined >(undefined)
    const [userUid, setUserUid] = useState<string | null>(null)
    const [userNotifications, setUserNotifications] = useState<undefined | {1:UserNotificationsType[], 2:UserNotificationsType[], 3:UserNotificationsType[], 4:UserNotificationsType[]}>(undefined)
    const [userNotificationsMaxItems, setUserNotificationsMaxItems] = useState<undefined | {1:UserNotificationsType[], 2:UserNotificationsType[], 3:UserNotificationsType[], 4:UserNotificationsType[]}>(undefined)
    
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
        
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          signOutUtil()
          alert('ingen gyldig email funnet, prøv igjen')
          return
        }
        await createUserForDb(uid, email)
        updateUserData(uid)
      } else {
        setuserData(userDataSnapshot.data())
        window.localStorage.removeItem('emailForSignIn');
      }
      
      
    }
    const uid = auth?.currentUser?.uid
    if (uid) {
        setUserUid(uid)
        updateUserData(uid)
    }
    
  },[authState])

  useEffect(()=>{
    console.log('userdata: ',userData)
    async function getUserNotifications() {
        const data = await GetNotificationsUser(userData?.notificationIds)
        setUserNotifications(data?.full)
        setUserNotificationsMaxItems(data?.short)
    }
    if (userData) {
        getUserNotifications()
    }
  },[userData])
  

  return (
    <UserDataContext.Provider value={{userData, authState, userUid, userNotifications, userNotificationsMaxItems}}>
        {children}
    </UserDataContext.Provider>
  )
}

export default UserAuthLayout
export {UserDataContext}