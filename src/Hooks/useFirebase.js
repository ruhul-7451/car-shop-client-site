import firebaseInitialization from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialization();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [dataLoading, setDataLoading] = useState(true);
    const [displayName, setDisplayName] = useState('')
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setDataLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const registerUser = (email, password) => {
        setDataLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const UpdateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            setDisplayName(name)
            // Profile updated!
            // ...
        }).catch((error) => {
            setErrorMsg(error.message);
        });
    }

    const signInUser = (email, password) => {
        setDataLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        setDataLoading(true)
        signOut(auth)
            .then(() => { })
            .catch((error) => { setErrorMsg(error.message); })
            .finally(setDataLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            user ? setUser(user) : setUser({})
            setDataLoading(false)
        });
        return () => unsubscribed;
    }, [auth]);


    return {
        user,
        errorMsg,
        dataLoading,
        displayName,
        googleSignIn,
        registerUser,
        setDisplayName,
        UpdateUserProfile,
        setDataLoading,
        signInUser,
        logOut
    }

}
export default useFirebase;