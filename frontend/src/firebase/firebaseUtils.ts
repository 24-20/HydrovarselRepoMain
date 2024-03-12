import {auth, db} from './firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, addDoc, updateDoc } from "firebase/firestore"; 
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { DocumentData } from 'firebase/firestore';
async function SearchStations () {
    const stationsRef = collection(db, "Stations");
    
    // Create a query against the collection.
    const q = query(stationsRef);
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    return querySnapshot
}

//------------------------------------------
//creating user
async function createUserWithEandP (email:string, password:string) {
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        return user
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorCode)
        console.log(errorMessage)
        return error

        // ..
    });
}
async function createUserForDb (uid:string) {
    await setDoc(doc(db, "Users", uid), {
        plan:'free',
        notificationIds:[],
        notificationTriggeredCount:0
      });
}

async function signInWithEandP (email:string, password:string) {
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        return user
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorMessage)
        console.log(errorCode)
        return error
        // ..
    });
}
async function signOutUtil () {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('signed out')
      }).catch((error) => {
        // An error happened.
        console.log(error.message)
      });
}

//-------------------------------------------------
//User account page
async function updateNotificationsIdUser (uid:string, notifId:string) {
    const userDataDoc = doc(db, 'Users',uid)
    const userDataSnapshot = await getDoc(userDataDoc)
    const userData = userDataSnapshot.data()
    const prevNotificationIds = userData?.notificationIds
    await updateDoc(userDataDoc, {
        notificationIds:[...prevNotificationIds, notifId]
      });
    
}
async function GetNotificationsUser (NotificationIds:DocumentData | undefined) {
    const notificationData = {1:new Array(), 2:new Array(), 3:new Array(), 4:new Array(),}

    if (NotificationIds === undefined) return undefined

    for (let i = 0; i<NotificationIds.length;i++) {
        const notifdoc = doc(db, 'Notifications1',NotificationIds[i])
        const notif = await getDoc(notifdoc) 
        if (!notif.data())console.log(NotificationIds[i])
        const notifdata = notif.data() 
        const updatedNotifObj = {...notifdata, id:NotificationIds[i]}
        //filtering notification after type
        const alerttype = notifdata?.alerttype as '1'|  '2' | '3'|'4'
        notificationData[alerttype]?.push(updatedNotifObj)
        
    }
    return notificationData    
    
    
}

//-------------------------------------------------
//Alerts
async function AddAlertToDb1 (cool:string | null, del:string | null, met:string | null, par:string | null, riv:string | null, con:string | null, ale:string | null, not:string | null ) {
    console.log(cool, del, met, par, riv, con, ale, not)
    const notification = await addDoc(collection(db, "Notifications1"), {
        cooldown:cool,
        deleteAfterTrigger:del,
        method:met,
        parameter:par,
        river:riv,
        condition:con,
        alertVal:ale,
        noteInp:not,
        alerttype:1
      });
      return notification.id
}
export {createUserWithEandP, signInWithEandP, signOutUtil, createUserForDb, SearchStations, AddAlertToDb1, updateNotificationsIdUser, GetNotificationsUser}