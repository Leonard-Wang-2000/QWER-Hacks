import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC4DwpA56ZPvZrE2GossaAa5YKFDC3wGO0",
  authDomain: "ratingsite-74d74.firebaseapp.com",
  databaseURL: "https://ratingsite-74d74.firebaseio.com",
  projectId: "ratingsite-74d74",
  storageBucket: "ratingsite-74d74.appspot.com",
  messagingSenderId: "573082691474",
  appId: "1:573082691474:web:0d6ba4462d0e0cf8b5034b",
  measurementId: "G-H2RBKNK7N1"
};

const fire = firebase.initializeApp(config);
export default fire;
