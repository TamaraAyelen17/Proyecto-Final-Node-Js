import 'dotenv/config';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { envs } from './envs.js';
console.log(envs);

const {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
}= envs.database;

const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };