import { Component, OnInit } from '@angular/core';

import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
	selector: 'book-list',
	templateUrl: '../views/books/list.html',
	providers: [
		BookService
	]
})
export class BooksListComponent implements OnInit {
	title: string;
	books: Book[];
	errorMessage: any;

	constructor(
		private _bookService: BookService
	) {
		this.title = 'Lista de Libros';
	}

	ngOnInit() {
		console.log('Componente cargado putito');
		this._bookService.getBooks().subscribe(
			result => {
				if( ! result.success) {
					alert('Error en el servidor');
				}
				this.books = result.data;
			},

			error => {
				this.errorMessage = <any>error
				console.log(this.errorMessage);
			}
		)
	}


}
