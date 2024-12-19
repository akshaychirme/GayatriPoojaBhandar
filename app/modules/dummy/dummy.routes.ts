//This file defines the routes for the module, linking HTTP endpoints (e.g., /dummy) to the appropriate service or controller methods. It ensures modularity by encapsulating all the routes related to this module.

import { Request, Response, NextFunction, Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import dummyService from "./dummy.service";

export const DummyRouter = Router();

DummyRouter.get("/", (req: Request, res: Response, next: NextFunction) =>{
	try{
		const result = dummyService.dummyGet();
		res.send(new ResponseHandler(result));
	}catch(e){
		next(e);
	}
})