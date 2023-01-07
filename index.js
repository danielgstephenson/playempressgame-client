import { getFunctions, httpsCallable } from "firebase/functions";
import { initializeApp } from 'firebase/app';

const app = initializeApp({
    projectId: 'playempressgame',
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
  });

const functions = getFunctions();
const addMessage = httpsCallable(functions, 'addMessage');
addMessage({ text: messageText })
  .then((result) => {
    // Read result of the Cloud Function.
    /** @type {any} */
    const data = result.data;
    const sanitizedMessage = data.text;
  });