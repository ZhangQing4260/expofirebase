import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCiyc42phdS3ME1jHJn-nlJ4mLh7pqqZ9w",
    authDomain: "ux308-final-c5953.firebaseapp.com",
    projectId: "ux308-final-c5953",
    storageBucket: "ux308-final-c5953.appspot.com",
    messagingSenderId: "870282185325",
    appId: "1:870282185325:web:1599ffa1ca6d45a9184d64"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };
