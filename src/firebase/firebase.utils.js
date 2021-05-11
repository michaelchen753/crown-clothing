import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBtzUWfgyUsiZMaehwQMERyQuS0su_7hZw",
    authDomain: "crown-db-76c39.firebaseapp.com",
    projectId: "crown-db-76c39",
    storageBucket: "crown-db-76c39.appspot.com",
    messagingSenderId: "834426042192",
    appId: "1:834426042192:web:5758d8fb44c79d81409e55"
}

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if(!userAuth) return;

    const userRef =firestore.doc(`user/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
export default firebase;