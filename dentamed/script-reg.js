


  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBolVPmODEEolUNG-fUj4VeB66R9jgMP3Q",
    authDomain: "denta-med-db.firebaseapp.com",
    projectId: "denta-med-db",
    storageBucket: "denta-med-db.appspot.com",
    messagingSenderId: "945805721661",
    appId: "1:945805721661:web:d4af2b6978ac9ccee52a54"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

document.getElementById('reg-btn').addEventListener('click', function(e){
    set(ref(db, 'user/' + document.getElementById('first_name').value), {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        entry_date: document.getElementById('entry_date').value,
        entry_time: document.getElementById('entry_time').value

    })
})
