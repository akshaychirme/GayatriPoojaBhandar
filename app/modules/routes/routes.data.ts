import { IExcludedPaths } from "../auth/auth.types";
import { HomeRouter } from "../users/users.routes";
// import { DummyRouter } from "../dummy/dummy.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
	// new Route("/dummy", DummyRouter)
	new Route("/", HomeRouter )
];

export const excludedPaths: IExcludedPaths[] =[
	// {path: 'auth/login', method: "POST"},
	{path: '/', method:"GET"}
]
