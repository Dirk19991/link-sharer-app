import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCIWI_GYQllL56pzNmmED9n8adpMkGotoQ',
  authDomain: 'link-sharer-app.firebaseapp.com',
  projectId: 'link-sharer-app',
  storageBucket: 'link-sharer-app.appspot.com',
  messagingSenderId: '478737827710',
  appId: '1:478737827710:web:72102aff7789fb8ec1d52f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
