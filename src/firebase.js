import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'nwitter-drv98.firebaseapp.com',
  projectId: 'nwitter-drv98',
  storageBucket: 'nwitter-drv98.appspot.com',
  messagingSenderId: '97502061943',
  appId: '1:97502061943:web:7cb2ec968760b4e7a3ad72',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
