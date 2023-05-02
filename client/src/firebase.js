import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDV7zPRR4m5uqIkLQOuPfZswqRfxFFTvrM",
    authDomain: "learnerspace-1eac8.firebaseapp.com",
    projectId: "learnerspace-1eac8",
    storageBucket: "learnerspace-1eac8.appspot.com",
    messagingSenderId: "352733195928",
    appId: "1:352733195928:web:aea7469615784e49672aed"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export default db;