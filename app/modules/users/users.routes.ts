import { Request, Response, NextFunction, Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import homeService from "../users/users.service";
import path from "path";

export const HomeRouter = Router();

HomeRouter.get("/", (req: Request, res: Response, next: NextFunction) =>{
	try{
		const filePath = path.join(__dirname,  "../../../../app/public/homepage.html");
		// const filePath = "D:/Maxxzoom/MXZ/TypeScript/GayatriPoojaBhandar/app/public/homepage.html"
    res.sendFile(filePath);
		// const result = homeService.homeGet();
		// res.send(new ResponseHandler(result));
	}catch(e){
		next(e);
	}
})