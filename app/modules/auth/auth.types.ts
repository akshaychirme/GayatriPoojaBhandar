// defining a type method which have only this 4 types.
type Method = "GET" | "POST" | "PUT" | "DELETE";

export interface IExcludedPaths{
	path: string;
	method: Method
}