import { IExcludedPaths } from "../auth/auth.types";
import { DummyRouter } from "../dummy/dummy.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
	new Route("/dummy", DummyRouter)
];

export const excludedPaths: IExcludedPaths[] =[
	{path: 'auth/login', method: "POST"}
]
