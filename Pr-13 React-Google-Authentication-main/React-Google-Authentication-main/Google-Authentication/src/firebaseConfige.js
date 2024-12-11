import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPApdgaaN8WeIWa7wATXXBBKvOHD4Zy0o",
  authDomain: "realtime-511c2.firebaseapp.com",
  databaseURL: "https://realtime-511c2-default-rtdb.firebaseio.com",
  projectId: "realtime-511c2",
  storageBucket: "realtime-511c2.appspot.com",
  messagingSenderId: "147967933169",
  appId: "1:147967933169:web:398c9f6793f63ecf808750",
  measurementId: "G-BRCLKL0JMB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
