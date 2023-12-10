/* eslint-disable prettier/prettier */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCjCn3OPkNfd3sNW7dj5MVA4kU39Dbp1aI",
  authDomain: "chingchan-2c59b.firebaseapp.com",
  projectId: "chingchan-2c59b",
  storageBucket: "chingchan-2c59b.appspot.com",
  messagingSenderId: "391834755057",
  appId: "1:391834755057:web:f280d966f8327370f62e50",
  measurementId: "G-QECL5WKY8H"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;