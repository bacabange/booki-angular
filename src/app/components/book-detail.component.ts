import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
	selector: 'book-detail',
	templateUrl: '../views/books/detail.html',
	providers: [
		BookService
	]
})
export class BookDetailComponent implements OnInit {
	title: string;
	errorMessage: any;
	book: Book;

	constructor(
		private _bookService: BookService,
		private _route: ActivatedRoute,
		private _router: Router
	) {
		this.title = 'Detail of book';
	}

	ngOnInit(){
		this.getBook();
	}

	getBook() {
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			this._bookService.getBook(id).subscribe(
				result => {

					if( ! result.success) {
						alert('Error en el servidor');
					}
					this.book = result.data;
				},

				error => {
					this.errorMessage = <any>error
					console.log(this.errorMessage);
				}
			);
		});
	}
}
