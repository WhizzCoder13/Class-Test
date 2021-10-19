import firebase from 'firebase';


var firebaseConfig = {
    
        apiKey: "AIzaSyAau9_hOGu-vyua5rb8rydBA38YNbW9gxg",
        authDomain: "classtest-df9f2.firebaseapp.com",
        projectId: "classtest-df9f2",
        storageBucket: "classtest-df9f2.appspot.com",
        messagingSenderId: "892699860417",
        appId: "1:892699860417:web:133f9025179f403839a340",
        measurementId: "G-L0V6MY3LMP"
      };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

export default firebase.database();