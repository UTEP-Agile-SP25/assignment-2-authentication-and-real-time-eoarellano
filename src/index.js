import { signUp, login, logout, listSong } from './auth';

const signUpForm = document.querySelector("#signupForm")
if(signUpForm){
  signUpForm.addEventListener("submit", (event) =>{
    event.preventDefault()
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value
    
    signUp(firstName, lastName, email, password)
  })
}

const logOutForm = document.querySelector("#logOut")
if(logOutForm){
  logOutForm.addEventListener("submit", (event) =>{
    event.preventDefault()
    logout()
  })
}

const logInForm = document.querySelector("#loginform")
if(logInForm){
  logInForm.addEventListener("submit", (event) =>{
    event.preventDefault()
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value
  
    login(email, password)
  })
}

console.log("index.js")
