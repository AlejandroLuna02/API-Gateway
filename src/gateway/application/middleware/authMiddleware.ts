import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    if (token !== 'valid-token') {
        return res.status(403).json({ error: 'Forbidden' });
    }

    next();
};
