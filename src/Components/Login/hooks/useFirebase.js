import intializeFirebase from "../../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

intializeFirebase()
const useFirebase=()=>{
    const[user,setUser]=useState({})
    const[isloading,setisLoading]=useState(true);
    const[error,setError]=useState('');
  const[admin,setAdmin]=useState(false)

    
    
    const auth = getAuth();



    const registerUser=(email,password,name,history)=>{
        console.log(email,name)
        setisLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setError('');
            const newLogin = {email,displayName:name}
            console.log(email)
            setUser(newLogin)
            // SAVE USER
            saveUser(email,name,'POST')

            updateProfile(auth.currentUser, {
              displayName:name
            }).then(() => {
              
            }).catch((error) => {
              // An error occurred
              // ...
            });
            history.replace('/')
          
          })
          .catch((error) => {
           
            setError(error.message);
            // ..
          })
          .finally(()=>setisLoading(false)); 
    }




    // 
    useEffect(()=>{
      fetch(`https://protected-atoll-93950.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))

    },[user.email])


    
 useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
         if (user) {
           setUser(user)
         } else {
         setUser({})
         }
         setisLoading(false)
       });
       return ()=>unsubscribed;
  },[])



  const login=(email,password,location,history)=>{
    setisLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setisLoading(false));
    
   }


    // log out
    const logOut=()=>{
        setisLoading(true);
        const auth = getAuth();
     signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
})
.finally(()=>setisLoading(false));
    }


    const saveUser=(email,displayName,method)=>{
      const user={email,displayName};
      fetch('https://protected-atoll-93950.herokuapp.com/users',{
        method:method,
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(user)
      })
      .then()
     
 }




    return {
        user,registerUser,logOut,login,isloading,error,admin

    }

}

export default useFirebase;