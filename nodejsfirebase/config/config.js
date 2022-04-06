const firebase = require("firebase")
const firebaseConfig = {
  apiKey: "AIzaSyDuCpKe6-TcaK83IBZM373mQApuNZL_6ZE",
  authDomain: "nodejsfirebase-7dae4.firebaseapp.com",
  projectId: "nodejsfirebase-7dae4",
  storageBucket: "nodejsfirebase-7dae4.appspot.com",
  messagingSenderId: "700798478628",
  appId: "1:700798478628:web:1f10979864f38061b62bb1",
  measurementId: "G-5P87TVZ19W",
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const User = db.collection("Users")

module.exports = User
