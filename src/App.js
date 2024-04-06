
import { useEffect, useState } from "react"; 
import { db } from "./firebase";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export default function App(){

  const [user_id, setUser_id] = useState("");
  const [fetchUID, setFetchUID] = useState("");

  const handleCreateUser = async () => {
    try{
        const collectionRef = collection(db, "users");
        const docID = user_id;
        const docRef = doc(collectionRef, docID);
        await setDoc(docRef, {created: true})
        console.log("user created")
    }
    catch(e){
      console.error("Error", e)
    }
  }

  const fetchCreateUser = async () => {
    try{
        const collectionRef = collection(db, "users");
        const docID = fetchUID;
        const docRef = doc(collectionRef, docID);
        const document = await getDoc(docRef);
        console.log(document.id, document.data());
    }
    catch(e){
      console.error("Error", e)
    }
  }

  return (
    <div>
      <input type="text" onChange={(e)=>setUser_id(e.target.value)}/>
      <button onClick={handleCreateUser}>Create User</button>
      <br />
      <input type="text" onChange={(e)=>setFetchUID(e.target.value)}/>
      <button onClick={fetchCreateUser}>Fetch User</button>
    </div>
    
  )
}