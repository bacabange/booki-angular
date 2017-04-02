import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, QueryEncoder, RequestOptions } from '@angular/http';
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
		let book_json = book;
		book_json['api_token'] = this.api_key;
		let json = JSON.stringify(book_json);


		let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

		return this._http.post(this.url + 'books', json, options)
						.map(res => res.json());
	}

	updateBook(id: number, book: Book){
		let params: URLSearchParams = new URLSearchParams();
		let book_json = book;
		book_json['api_token'] = this.api_key;
		let json = JSON.stringify(book_json);


		let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

		return this._http.put(this.url + 'books/' + id, json, options)
						.map(res => res.json());
	}

	deleteBook(id: number){
		let params: URLSearchParams = new URLSearchParams();
		params.set('api_token', this.api_key);

		let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

		return this._http.delete(this.url + 'books/' + id, {search: params})
						.map(res => res.json());
	}
}