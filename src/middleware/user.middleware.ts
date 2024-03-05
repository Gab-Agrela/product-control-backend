import { NextFunction, Request, Response } from "express";

class UserMiddleware {
  async hasUsername(req: Request, resp: Response, next: NextFunction) {
    const { method } = req;
    const { username } = method === "GET" ? req.params : req.body;
    if (!username)
      return resp.status(400).json({ message: "Missing field: username" });
    return next();
  }

  async hasEmail(req: Request, resp: Response, next: NextFunction) {
    const { method } = req;
    const { email } = method === "GET" ? req.params : req.body;
    if (!email)
      return resp.status(400).json({ message: "Missing field: email" });
    return next();
  }

  async hasPassword(req: Request, resp: Response, next: NextFunction) {
    const { method } = req;
    const { password } = method === "GET" ? req.query : req.body;
    if (!password)
      return resp.status(400).json({ message: "Missing field: password" });
    return next();
  }
}

export default UserMiddleware;
