import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBWOelU9K6zMfDPqmHAVxuUsNrKFXKR0Wo",
  authDomain: "crown-db-5fd9e.firebaseapp.com",
  projectId: "crown-db-5fd9e",
  storageBucket: "crown-db-5fd9e.appspot.com",
  messagingSenderId: "484248558091",
  appId: "1:484248558091:web:ac61cb6862ecf57d96c50e",
  measurementId: "G-L2EZFTXTHC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const {displayName, email} = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData
			})
		} catch(error) {
			console.log( error.message , 'error creating user ')
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
