import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC1r7E3oOBM1te3izJd1IA5VhvB40ctc94",
    authDomain: "movie-app-5adc1.firebaseapp.com",
    projectId: "movie-app-5adc1",
    storageBucket: "movie-app-5adc1.appspot.com",
    messagingSenderId: "574746167748",
    appId: "1:574746167748:web:67538b6f1a4064140ebc91"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
