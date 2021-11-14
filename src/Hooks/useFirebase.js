import firebaseInitialization from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";

firebaseInitialization();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [dataLoading, setDataLoading] = useState(true);
    const [displayName, setDisplayName] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const [admin, setAdmin] = useState(false);

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
        setDisplayName('')
        signOut(auth)
            .then(() => { })
            .catch((error) => { setErrorMsg(error.message); })
            .finally(setDataLoading(false))
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        axios.post('https://fierce-basin-08872.herokuapp.com/users', user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const saveGoogleUser = (email, displayName) => {
        const user = { email, displayName }
        axios.put('https://fierce-basin-08872.herokuapp.com/users', user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        fetch(`https://fierce-basin-08872.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

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
        admin,
        saveUser,
        saveGoogleUser,
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