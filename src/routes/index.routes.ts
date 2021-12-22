import { Router } from "express";
import BasicRouter from "./basic.routes";

const AppRouter = Router();

AppRouter.use("/", BasicRouter);

export default AppRouter;
