import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyAJJosPHGehGnqIWtHWhDVDsz2Q8ZZwRGs',
  authDomain: 'quiz-app-7b340.firebaseapp.com',
  projectId: 'quiz-app-7b340',
  storageBucket: 'quiz-app-7b340.appspot.com',
  messagingSenderId: '843946679837',
  appId: '1:843946679837:web:87f91cc880aeed404a30f4',
  measurementId: 'G-PDX8T1JBVR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
