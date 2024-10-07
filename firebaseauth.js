// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOIjbyzVg4U_t5slL7sut16scOjvdFtLA",
  authDomain: "login-47465.firebaseapp.com",
  projectId: "login-47465",
  storageBucket: "login-47465.appspot.com",
  messagingSenderId: "380767607866",
  appId: "1:380767607866:web:f4765f3213fb2b38e1a903"
};

const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function() {
    messageDiv.style.opacity = 0;
  }, 5000);
}

const signUp = document.getElementById('submitSignUp');
if (signUp) {
  signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const rEmail = document.getElementById('rEmail').value;
    const rPassword = document.getElementById('rPassword').value;
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, rEmail, rPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email: rEmail,
          firstName: fName,
          lastName: lName
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
          .then(() => {
            window.location.href = 'index.html';
          })
          .catch((error) => {
            console.error("Error writing document:", error);
            showMessage('Unable to save user data', 'signUpMessage');
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/email-already-in-use':
            showMessage('Email already exists', 'signUpMessage');
            break;
          case 'auth/weak-password':
            showMessage('Password is too weak', 'signUpMessage');
            break;
          default:
            showMessage(`An error occurred: ${errorCode}`, 'signUpMessage');
        }
      });
  });
} else {
  console.error('Sign up button element not found');
}
