import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

const prisma = require("../prisma/prisma");

async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const headers = req.headers.authorization;

  if (!headers || !headers.startsWith("Bearer")) {
    return res.status(401).json({
      message: "Missing authorization header",
    });
  }

  const [, token] = headers.split(" ");

  if (!token) {
    return res.status(401).json({
      message: "Missing token",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    //  req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}

module.exports = AuthMiddleware;