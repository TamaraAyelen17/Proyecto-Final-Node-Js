import { config } from 'dotenv';
config();

export const envs = {
    database: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.PROJECTID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGINGSENDERID,
        appId: process.env.FIREBASE_APP_ID,
    },
    port: process.env.PORT || 3000,
    secrets:{
        jwt_Secret: process.env.JWT_SECRET_KEY
    }
};