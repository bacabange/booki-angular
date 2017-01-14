import { Component } from '@angular/core';

@Component({
	selector: 'book-list',
	templateUrl: '../views/books/list.html'
})
export class BooksListComponent {
	title: string;

	constructor() {
		this.title = 'Lista de Libros';
	}
}
