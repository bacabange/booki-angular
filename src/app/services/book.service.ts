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

	getBook(id: number) {
		let params: URLSearchParams = new URLSearchParams();
		params.set('api_token', this.api_key);

		return this._http.get(this.url + 'books/' + id, {search: params})
						.map(res => res.json());
	}

	addBook(book: Book){
		let params: URLSearchParams = new URLSearchParams();
		params.set('api_token', this.api_key);

		let json = JSON.stringify(book);
		params.set('data', json);

		let headers = new Headers({'Accept': 'application/json'});
		return this._http.post(this.url + 'books/', params, {headers: headers})
						.map(res => res.json());
	}
}