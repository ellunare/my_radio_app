import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

@Injectable()
export class RadioInterceptor implements HttpInterceptor {

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// console.log(req);
		const newRequest = req.clone({
			headers: req.headers
				.append('Content-Type', 'application/json')
			// .append('Authorization', 'token <your GitHub token>')
		});
		// console.log('Intercepted -->', newRequest);
		return next.handle(req)
		.catch ((error, caught) => {
			//intercept the respons error and displace it to the console
			console.log('interceptor error -->', error);
			//return the error to the method that called it
			return Observable.throw(error);
		}) as any;
	}

}