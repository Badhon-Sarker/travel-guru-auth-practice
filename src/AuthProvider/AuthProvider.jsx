import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const handleCreateUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const Login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, curentUser =>{
            setUser(curentUser)
            setLoading(false)
            
        });

        return ()  =>{
            unSubscribe()
        } 
    },[])

    const data = {
        user,
        handleCreateUser,
        Login,
        setUser,
        logOut,
        loading

    }
    return (
       <AuthContext.Provider value={data}>
         {
            children
         }
       </AuthContext.Provider>
    );
};

export default AuthProvider;