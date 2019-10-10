import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyA_53ikiYu-KJy5UUqluGdvKsrwAKCDiv4',
  authDomain: 'banksy-trading-co.firebaseapp.com',
  databaseURL: 'https://banksy-trading-co.firebaseio.com',
  projectId: 'banksy-trading-co',
  storageBucket: 'banksy-trading-co.appspot.com',
  messagingSenderId: '705074590890',
  appId: '1:705074590890:web:169548df66e4838cca8cd3',
  measurementId: 'G-ERCQ4GS36D'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // user logged out
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    // create new user
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
