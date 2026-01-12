import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export const authOptional = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, env.JWT_SECRET!);
      (req as any).user = decoded;
    } catch (error) {
      // Invalid token, but continue without user
    }
  }

  next();
};