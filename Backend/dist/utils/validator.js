import { body, validationResult } from "express-validator";
//validate function to check if the request body is valid
export const validatefun = (validations) => {
    return async (req, res, next) => {
        // Run all validation middlewares
        await Promise.all(validations.map(validation => validation.run(req)));
        // Check validation results
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next(); // Move to the next middleware if no validation errors
    };
};
export const loginValidator = [
    body("email").trim().isEmail().withMessage("Invalid email"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password must be atleast 6 characters long")
];
export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator
];
//# sourceMappingURL=validator.js.map