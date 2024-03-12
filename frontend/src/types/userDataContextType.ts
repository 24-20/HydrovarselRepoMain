
import { DocumentData } from "firebase/firestore"
export type userDataContextType = {
    authState:boolean,
    userData: DocumentData | undefined ,
    userUid:string | null,
    userNotifications:undefined | {1:any[], 2:any[], 3:any[], 4:any[]}
  };