  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js"
  import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDOIjbyzVg4U_t5slL7sut16scOjvdFtLA",
    authDomain: "login-47465.firebaseapp.com",
    projectId: "login-47465",
    storageBucket: "login-47465.appspot.com",
    messagingSenderId: "380767607866",
    appId: "1:380767607866:web:f4765f3213fb2b38e1a903"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
      messageDiv.style.opacity=0;
    }, 5000);
  }

  const signUp=document.getElementById('submitSignUp');
  signUp.addEventListener('click', (event)=> {
    event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstName=document.getElementById('fName').value;
    const lastName=document.getElementById('lName').value;

    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      const user=userCredential.user;
      const userData={
        email: email,
        firstName: firstName,
        lastName: lastName
      };
      showMessage('Account Created Successfully', 'signUpMessage');
      const docRef=doc(db, "users", user.uid);
      setDoc(docRef, userData)
      .then(()=>{
        window.location.href='index.html';
      })
      .catch((error)=>{
        console.error("error writing document", error);

      });
    })
    .catch((error)=>{
      const errorCode=error.code;
      if(errorCode=='auth/email-already-in-use'){
        showMessage('Email already exists', 'signUpMessage');
      }
      else{
        showMessage('Unable to Create User', 'signUpMessage');
      }
    })
  });

