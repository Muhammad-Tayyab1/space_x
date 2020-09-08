import firebase from 'firebase'

 const firebaseConfig = {
  apiKey: "AIzaSyDQG68OOjTnbSQymsBUicZIiWx0xf-Qoho",
  authDomain: "space-x-de4ae.firebaseapp.com",
  databaseURL: "https://space-x-de4ae.firebaseio.com",
  projectId: "space-x-de4ae",
  storageBucket: "space-x-de4ae.appspot.com",
  messagingSenderId: "537303858688",
  appId: "1:537303858688:web:cc95b7c6ac9aef5d55e2e5"
  };
  
  firebase.initializeApp(firebaseConfig)
  export default firebase;