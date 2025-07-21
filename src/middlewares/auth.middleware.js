import { verifyToken } from "../utils/token-generator.js";

export const authentication = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if(!token) return res.status(401).json({error: 'Token requerido'});

    const verificationResult = verifyToken(token);
    if (!verificationResult.valid) return res.status(403).json({error: 'Token inválido'});

    req.user = verificationResult.decoded;
    next();
};