import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB6BIQslnCYcQufHxj0s9myvpDlOzqF7YE",
    authDomain: "mlbb-item-builder.firebaseapp.com",
    databaseURL: "https://mlbb-item-builder.firebaseio.com",
    projectId: "mlbb-item-builder",
    storageBucket: "mlbb-item-builder.appspot.com",
    messagingSenderId: "726505717162",
    appId: "1:726505717162:web:876f583b49c53028d17fd3"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()