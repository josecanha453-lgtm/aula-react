// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, browserLocalPersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjUXmR4824kgOUY90qBs5rzoDsLW9KCCE",
  authDomain: "primeiro-projeto-noite-be0cf.firebaseapp.com",
  projectId: "primeiro-projeto-noite-be0cf",
  storageBucket: "primeiro-projeto-noite-be0cf.firebasestorage.app",
  messagingSenderId: "265672599013",
  appId: "1:265672599013:web:5b35bf2a13ca98d251bb0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const persistenceMode = Platform.OS === 'web'
? browserLocalPersistence
: getReactNativePersistence(AsyncStorage);

const auth = initializeAuth(app, {persistence: persistenceMode });
export { db, auth }