import user from "../models/user.js";
import { hash, compare } from "bcrypt";
export const getAllUsers = async (req, res, next) => {
    //get all users
    try {
        const users = await user.find(); //since we are using mongoose we can use find method to get all users [no pass parameters so retrn all users]
        return res.status(200).json({ message: "ok", users }); //return all users in json format
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "Error", cause: error.message }); //return error message in json format
    }
};
export const userSignUp = async (req, res, next) => {
    //user sign up
    try {
        const { name, email, password } = req.body; //get data from request body
        const UserExist = await user.findOne({ email }); //check if user already exist
        if (UserExist)
            return res.status(401).json({ message: "Error", cause: "User already exist" }); //return error message in json format
        const hashedPassword = await hash(password, 10); //hash password using sha256
        const User = new user({ name, email, password: hashedPassword }); //create new user object
        await User.save(); //save user to database
        return res.status(201).json({ message: "ok", id: User._id.toString() }); //return all users in json format
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "Error", cause: error.message }); //return error message in json format
    }
};
export const userLogin = async (req, res, next) => {
    //user sign up
    try {
        const { email, password } = req.body; //get data from request body
        const User = await user.findOne({ email }); //find user by email
        if (!User) {
            return res.status(401).json({ message: "Error", cause: "User not found" }); //return error message in json format
        }
        //check if password is correct
        const isPasswordCorrect = await compare(password, User.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ message: "Error! Invalid Password", cause: "Invalid password" }); //return error message in json format
        }
        return res.status(200).json({ message: "ok", id: User._id.toString() }); //return all users in json format
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "Error", cause: error.message }); //return error message in json format
    }
};
//# sourceMappingURL=user-controller.js.map