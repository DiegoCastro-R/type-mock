import { Router, Request, Response, NextFunction } from "express";

const BasicRouter = Router();

BasicRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    return res.json({ message: "Hello from Route without auth" });
  }
);

BasicRouter.get(
  "/auth",
  async (req: Request, res: Response, next: NextFunction) => {
    return res.json({ message: "Hello from Route with auth" });
  }
);

export default BasicRouter;
