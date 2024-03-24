import jwt from 'jsonwebtoken';
import User from './authentication';
import './mongoose';
import { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
    userData?: any; // Define the userData property
}

const checkAuth = async (req: AuthenticatedRequest, res:Response, next:NextFunction) => {
    try {
        const token:any = req.headers.authorization?.split(' ')[1];
        const decoded:any = jwt.verify(token, 'your_secret_key');
        req.userData = decoded;
        const id = req.userData._id;
        console.log(decoded);
        // Use async/await to wait for the promise to resolve
        const user = await User.findOne({ _id: id });

        // Check if user exists
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Check if user has permission for the requested method
        if (!user.permission.includes(req.method.toLowerCase())) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        // If user has permission, proceed to the next middleware
        next();
    } catch (error) { 
        console.error(error);
        return res.status(400).json({
            message: "Not authorized to perform the action"
        });
    }
};
export  default checkAuth;