import { Router } from "express";
import { getAllUsers, userLogin, userSignUp } from "../controllers/user-controller.js";
import { loginValidator, signupValidator, validatefun } from "../utils/validator.js";

const userRouter = Router();

userRouter.get("/",getAllUsers)
//first call validate function if it satisfy then call userSignUp
userRouter.post("/signup",validatefun(signupValidator),userSignUp)

userRouter.post("/login",validatefun(loginValidator),userLogin)  //validatefun will validate the request body before calling userSignUp

userRouter.get("/auth-status",userLogin)
export default userRouter;
