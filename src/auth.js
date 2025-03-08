import { auth } from "./config";
import { doc, setDoc } from "firebase/firestore";
import { db } from './config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("User is signed in: ", user.email);
    } else {
        console.log("No user is signed in.");
    }
})

export async function signUp (firstName, lastName, email, password){
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log("User signed up: ", userCredential.user.email)
        console.log("User ID: ", userCredential.user.uid)
        const userRef = doc(db, "users", userCredential.user.uid)

        await setDoc(userRef, {
            firstName:firstName,
            lastName:lastName,
            timestamp:new Date()
        })
       window.location.href = "index.html"
        
    } catch (error) {
        console.error("Error fetching user data", error)
    }
}

export async function login(email, password){
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
    window.location.href = "userPage.html"
    }catch(error){
        console.error("Login error: ", error.message)
    }
}

export async function logout() {
    try {
        await signOut(auth)
        console.log("User Logged Out")
        window.location.href = "index.html"
    } catch (error) {
        console.error("Error logging out", error)
    }
}
