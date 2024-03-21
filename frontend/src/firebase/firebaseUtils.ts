import { AlertType1Db } from '@/types/AlertTypesDb/AlertType1Db';
import {actionCodeSettings, auth, db} from './firebaseConfig'
import { createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, addDoc, updateDoc,  documentId } from "firebase/firestore"; 
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
async function createUserForDb (uid:string, email:string) {
    await setDoc(doc(db, "Users", uid), {
        plan:'free',
        notificationIds:[],
        notificationTriggeredCount:0,
        alertsNotOpenedAmount:0,
        alertLogField:[],
        email:email

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
async function sendSigninLinkUtil (email:string) {
    console.log(auth)
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
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

    if (NotificationIds === undefined) return undefined

    const dataObj = {short:{1:new Array(), 2:new Array(), 3:new Array(), 4:new Array(),},full:{1:new Array(), 2:new Array(), 3:new Array(), 4:new Array(),}}
    const notifdoc = collection(db, 'Notifications1')
    const notif = await getDocs(query(notifdoc, where(documentId(),'in',NotificationIds)))
    let index = 0
    notif.forEach((data)=>{
        index++
        let notifdata = data.data()
        const updatedNotifdata = {...notifdata, id:NotificationIds[index]}
        //filtering notification after type
        const alerttype = notifdata?.alerttype as '1'| '2' | '3'|'4'
        dataObj.full[alerttype]?.push(updatedNotifdata)
        if (!(dataObj.short[alerttype].length>= 3)) {
            dataObj.short[alerttype]?.push(updatedNotifdata)
        }
    })
    
        
    
    return dataObj    
    
    
}

//-------------------------------------------------
//Alerts cool:string | null, del:string | null, met:string | null, par:string | null, riv:string | null, con:string | null, ale:string | null, not:string | null
async function AddAlertToDb1 ( alert:AlertType1Db ) {
    console.log(alert)
    let timestamp = Date.now();
    const notification = await addDoc(collection(db, "Notifications1"), {
        coolcooldownAfterTriggerdown:alert.cooldownAfterTrigger,
        deleteAfterTrigger:alert.deleteAfterTrigger,
        method:alert.method,
        parameter:alert.parameter,
        stationId:alert.stationId,
        condition:alert.condition,
        valueLevel:alert.valueLevel,
        noteValue:alert.noteValue,
        email:alert.email?alert.email:null,
        sms:alert.sms?alert.sms:null,
        timestamp,
        userHasSeen:false,
        alerttype:1
      });
      return notification.id
}

export {sendSigninLinkUtil, createUserWithEandP, signInWithEandP, signOutUtil, createUserForDb, SearchStations, AddAlertToDb1, updateNotificationsIdUser, GetNotificationsUser}