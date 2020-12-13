import firebase from 'firebase'

// Required for side-effects
// require('firebase/firestore')

const firebaseConfig = {
  apiKey: 'AIzaSyBCrU2FFLC6y9WUNaLxuBAkIQ8oE9WkI-0',
  authDomain: 'testapp-32c44.firebaseapp.com',
  projectId: 'testapp-32c44',
  storageBucket: 'testapp-32c44.appspot.com',
  messagingSenderId: '105304888398',
  appId: '1:105304888398:web:6f34b010404b36063f5f1f',
  measurementId: 'G-NQ23QT3VS0'
}
// Initialize Firebase
if (process.client) {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}

// const db = firebase.firestore()

// window.db = db

// db.settings({
//   timestampsInSnapshots: true
// })
// export const database = db
