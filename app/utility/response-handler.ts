//to handel error across our entire application - structure should be always be define wether the response is succsses or error.


export class ResponseHandler{
	constructor(
		public data: any,
		public error: any = null //if error is absent then null will be visible.
	){}
}
