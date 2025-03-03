import { Router } from "express";
import userRouter from "./user-routes.js";
import chatRouter from "./chat-routes.js";

const appRouter = Router();

appRouter.use("/user",userRouter);  //domain/api/v1/user then transfer to userRouter to handle
appRouter.use("/chats",chatRouter);

export default appRouter;  