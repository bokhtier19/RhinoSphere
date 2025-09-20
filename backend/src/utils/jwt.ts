import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

const secret: Secret = process.env.JWT_SECRET || "changeme";
const expiresIn: string | number = process.env.JWT_EXPIRES_IN || "1h";

export const signToken = (payload: string | object | Buffer): string => {
    const options: SignOptions = { expiresIn: expiresIn as SignOptions["expiresIn"] };
    return jwt.sign(payload, secret, options);
};

export const verifyToken = (token: string): string | JwtPayload => {
    return jwt.verify(token, secret);
};
