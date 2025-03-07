import jwt from "jsonwebtoken";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email }; // Object to be used for token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expiresIn }); // Create token
    return token; // Return the token
};
//# sourceMappingURL=token-manager.js.map