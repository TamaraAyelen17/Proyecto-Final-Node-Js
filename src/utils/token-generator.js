import jwt from 'jsonwebtoken';
import { envs } from '../data/envs.js';

const {jwt_Secret} = envs.secrets;

export const generateToken = (userData) => {
    const user = {id: userData.id, email: userData.email};
    const expiration = {expiresIn: '1h'};

    return jwt.sign(user, jwt_Secret, expiration);
};

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, jwt_Secret);
        return { valid: true, decoded};
    } catch (error) {
        return { valid: false, message: error.message};
    }
};