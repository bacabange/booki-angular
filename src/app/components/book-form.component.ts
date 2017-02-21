import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
	selector: 'book-add',
	templateUrl: '../views/books/create.html',
	providers: [
		BookService
	]
})
export class BookFormComponent implements OnInit {
	title_section: string;
	book: Book;
	errorMessage: any;

	constructor(
		private _bookService: BookService,
		private _route: ActivatedRoute,
		private _router: Router
	) {
		this.title_section = 'Create Book';
	}

	ngOnInit() {
		this.book = new Book(0, "", "", 0, "", "", 21, 1, "", "");
	}

	public onSubmit(){
		console.log(this.book);
		this._bookService.addBook(this.book).subscribe(
			result => {
				if( ! result.success) {
					alert('Error en el servidor');
				}
				this.book = result.data;
				this._router.navigate(['/']);
			},

			error => {
				this.errorMessage = <any>error
				console.log(this.errorMessage);
			}
		);
	}
}