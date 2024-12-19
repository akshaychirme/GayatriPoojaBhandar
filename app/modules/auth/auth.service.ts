import { NextFunction, Response, Request } from "express";
import { sign, verify } from "jsonwebtoken";
import { IExcludedPaths } from "./auth.types";


export const createToken = (payload: any) => {
    const { JWT_SECRET } = process.env;
    const token = sign(payload, JWT_SECRET || '');

    return token;
}

export const verifyToken = (token: string) => {
    const { JWT_SECRET } = process.env;
    const payload = verify(token, JWT_SECRET || '');
    return payload;
}

//is used to aurthorize the user. user have token or not if has then it is valid or not. 
// excludepath is used for exclude the path for authorization. combination of path and request method.
//return next() is used to move to next middleware. 

export const authorize = (excludedPaths: IExcludedPaths[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if(
                excludedPaths.find(
                    e => e.path === req.url && e.method === req.method
                )
            ) {
                return next();
            }

            const token = req.headers.authorization || '';
    
            const payload = verifyToken(token);
    
            res.locals.user = payload;
    
            next(); // moves this middleware to next middleware
        } catch(e) {
            next({ statusCode: 403, message: 'UNAUTHORIZED' }) // this next method will call error handling middleware
        }
    }
}


//we check token wether the role is authorize or not. to accsess that api. 
export const permit = (permittedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if(permittedRoles.includes(res.locals.user.role)) {
            return next();
        }

        next({ statusCode: 403, message: 'UNAUTHORIZED' });
    }
}