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

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData: any
): Promise<any> => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

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

export const addCollectionAndDocs = async (
  collectionKey: string,
  objectsToAdd: any[]
): Promise<any> => {
  const collectionRef = firestore.collection(collectionKey)

  /* batch write */
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections: any) => {
  const transformedCollection = collections.docs.map((doc: any) => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((acc: any, collection: any): any => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
