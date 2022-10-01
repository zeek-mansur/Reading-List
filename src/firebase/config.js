import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDwJLUbBmnYZ7A1OSBOzFqTnjd-p1wuQf4",
    authDomain: "readinglistapp-58527.firebaseapp.com",
    projectId: "readinglistapp-58527",
    storageBucket: "readinglistapp-58527.appspot.com",
    messagingSenderId: "969554363728",
    appId: "1:969554363728:web:1ba9883b18cf26c7539855"
  };

// init firebase

initializeApp(firebaseConfig)

// init firestore

const db = getFirestore()

export { db }