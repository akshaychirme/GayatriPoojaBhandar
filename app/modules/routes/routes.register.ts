import { Application, json, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import { routes, excludedPaths } from "./routes.data";
import { ResponseHandler } from "../../utility/response-handler";
import { authorize } from "../auth/auth.service";

export const registerRoutes = (app: Application) => {
  app.use(helmet());
  app.use(cors());
  app.use(json());

//   app.use((req: Request, res: Response, next: NextFunction) => {
//     console.log("MIDDLEWARE CALLED");
//   })

  //every api will passed throuth this middleware and check authorization
  app.use(authorize(excludedPaths));

  for(let route of routes){
	app.use(route.path, route.router);
  }

  //Error Handling Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) =>{
	res.status(err.statusCode || 500).send(new ResponseHandler(null,err));
})

};
