import firebaseInitialization from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInitialization();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
            }).catch((error) => {
                setErrorMsg(error.message)
                console.log(errorMsg);
            });
    }

    const registerUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    setErrorMsg(error.message);
                });
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                // ...
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    }

    const logOut = () => {
        signOut(auth).then(() => { }).catch((error) => { setErrorMsg(error.message); });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            user ? setUser(user) : setUser({})
        });
        return () => unsubscribed;
    }, [auth]);


    return {
        user,
        errorMsg,
        googleSignIn,
        registerUser,
        signInUser,
        logOut
    }

}
export default useFirebase;