import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: "AIzaSyAXgAh9MxZitMMZIbi1YcrPIkNv7ZbeWc4",
  authDomain: "mobile-invitation-c9dd8.firebaseapp.com",
  databaseURL: "https://mobile-invitation-c9dd8-default-rtdb.firebaseio.com",
  projectId: "mobile-invitation-c9dd8",
  storageBucket: "mobile-invitation-c9dd8.firebasestorage.app",
  messagingSenderId: "291349112562",
  appId: "1:291349112562:web:5874423d9cd137168ad26b"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
