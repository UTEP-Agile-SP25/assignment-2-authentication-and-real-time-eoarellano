import {signUp, login, logout, onAuthStateChanged } from './auth';
import { db } from './config';
import { doc, setDoc } from "firebase/firestore";


const saveSong = async function(){
    const artistName = document.getElementById("artist").value.trim()
    const songName = document.getElementById("song").value.trim()
    console.log(artistName, songName)

    try {
        const songRef = doc(db, "songs", songName.toLowerCase()+"-"+artistName.toLowerCase())
        await setDoc(songRef, {
            artist: artistName,
            song: songName,
            timestamp: new Date()
        })
        console.log("Song added")
        document.getElementById("artist").value = ""
        document.getElementById("song").value =""
    }
    catch (error) {
        console.error("Error adding song", error)
    }
}

const addSong = document.querySelector("#listSong")
if(addSong){
    addSong.addEventListener("submit", (event) =>{
        event.preventDefault()
        saveSong()
    })
}