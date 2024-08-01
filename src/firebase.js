
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { getFirestore,addDoc,collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB0X-1GwVsvmCXRZ1ak5FtgsgcFaUtTsrY",
  authDomain: "my-netflix-ec7cc.firebaseapp.com",
  projectId: "my-netflix-ec7cc",
  storageBucket: "my-netflix-ec7cc.appspot.com",
  messagingSenderId: "498670771799",
  appId: "1:498670771799:web:eb2f08539e0721a03d4d12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)

const signup=async (name,email,password)=>{
    try{
     const response=await createUserWithEmailAndPassword(auth,email,password)
        const user=response.user
        await addDoc(collection(db,'user'),{
            uid:user.uid,
            name,
            authProvider:'local',
            email
        })
    }catch(err){
        console.log(err)
        alert(err)
    }   
}
const login=async (email,password)=>{
    try {
     await signInWithEmailAndPassword(auth,email,password)     
    } catch (error) {
        console.log(error)
        alert(error)
    }
   
}

const logOut=()=>{
    signOut(auth)
}

export {auth,db,logOut,signup,login}