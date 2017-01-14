import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, QueryEncoder } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';

@Injectable()

export class BookService {
	public url:string;
	public api_key:string;

	constructor(private _http: Http){
		this.api_key = 'nG0jwJK5dGkZj45JTO46mJ8VWPiwnKiJLSe8NlVCAAyBUponwyH726wwdfLc';
		this.url = 'http://booki.app/api/v1/';
	}

	getBooks(){
		let params: URLSearchParams = new URLSearchParams();
		params.set('api_token', this.api_key);

		return this._http.get(this.url + 'books', {search: params})
						.map(res => res.json());
	}

	/*getBookList (): Observable<Book[]> {
		let params: URLSearchParams = new URLSearchParams();
		params.set('api_token', this.api_key);

		return this._http.get(this.url + 'books', {search: params})
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}

	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}*/
}