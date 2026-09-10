import rateLimit from 'express-rate-limit';
import { env } from '../config/env.js';

export const generalLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX_REQUESTS,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

export const authLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.AUTH_RATE_LIMIT_MAX_REQUESTS,
  message: 'Too many authentication attempts, please try again later.',
  skip: (req) => req.method === 'GET',
});

export const aiLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.AI_RATE_LIMIT_MAX_REQUESTS,
  message: 'Too many AI requests, please try again later.',
});
