import { Router } from "express";
import userRouter from "./user-routes.js";
const appRouter = Router();
appRouter.use("/user", userRouter);
export default appRouter;
//# sourceMappingURL=index.js.map