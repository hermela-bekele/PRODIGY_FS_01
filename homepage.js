
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
    import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
    import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
    
    const firebaseConfig = {
        apiKey: "AIzaSyDOIjbyzVg4U_t5slL7sut16scOjvdFtLA",
        authDomain: "login-47465.firebaseapp.com",
        projectId: "login-47465",
        storageBucket: "login-47465.appspot.com",
        messagingSenderId: "380767607866",
        appId: "1:380767607866:web:f4765f3213fb2b38e1a903"
    };
    const app = initializeApp(firebaseConfig);
    
    const auth = getAuth();
    const db = getFirestore();
    
    onAuthStateChanged(auth, (user) => {
        console.log("User state changed:", user ? "Logged in" : "Logged out");
    
        const loggedInUserId = localStorage.getItem('loggedInUserId');
        if (loggedInUserId && user) {
            console.log("User ID found in local storage:", loggedInUserId);
    
            const docRef = doc(db, "users", loggedInUserId);
            getDoc(docRef)
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        console.log("User data:", userData);
    
                        document.getElementById('loggedUserFName').innerText = userData.firstName || '';
                        document.getElementById('loggedUserEmail').innerText = userData.email || '';
                        document.getElementById('loggedUserLName').innerText = userData.lastName || '';
    
                        console.log("User info displayed successfully");
                    } else {
                        console.log("No document found matching ID");
                    }
                })
                .catch((error) => {
                    console.error("Error getting document:", error);
                });
        } else {
            console.log("User not logged in or user ID not found in local storage");
        }
    });
    
    const logoutButton = document.getElementById('logout');
    
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUserId');
        signOut(auth)
            .then(() => {
                window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('Error Signing out:', error);
            });
    });
    
