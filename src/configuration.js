// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYfWciYPyMIr_dowbIWnZ3uuLN_qdgHuw",
  authDomain: "fir-8b6a7.firebaseapp.com",
  databaseURL: "https://fir-8b6a7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-8b6a7",
  storageBucket: "fir-8b6a7.appspot.com",
  messagingSenderId: "259779885355",
  appId: "1:259779885355:web:42174d7d73be59fd812d6e",
  measurementId: "G-QT5FCS4PEJ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const cong = initializeApp(firebaseConfig);

export default cong;