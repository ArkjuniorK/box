import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2OTwpyBQvzsK3JxUnvzXC2n1lDJAkWA0",
  authDomain: "box-app-94434.firebaseapp.com",
  databaseURL:
    "https://box-app-94434-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "box-app-94434",
  storageBucket: "box-app-94434.appspot.com",
  messagingSenderId: "777486260295",
  appId: "1:777486260295:web:02e4f06a9ddb2c98227962",
};

// Initialize Firebase
// const fb = initializeApp(firebaseConfig);
// const db = getDatabase(fb);

// export { fb, db };
export default initializeApp(firebaseConfig);
