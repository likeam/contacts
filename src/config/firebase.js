
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAXPvl_xa8Y2zv9nbKIqxNRmffUTELIFao",
  authDomain: "contacts-4817a.firebaseapp.com",
  projectId: "contacts-4817a",
  storageBucket: "contacts-4817a.appspot.com",
  messagingSenderId: "571636973396",
  appId: "1:571636973396:web:92997f00fc6ff62b4b12c1"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);