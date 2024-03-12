
import { DocumentData } from "firebase/firestore"
export type userDataContextType = {
    authState:boolean,
    userData: DocumentData | undefined ,
    userUid:string | null
  };