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

	constructor(
		private _bookService: BookService
	) {
		this.title_section = 'Create Book';
	}

	ngOnInit() {
		this.book = new Book(0, "", "", 0, "", "", 0, 0, "", "");
	}

	public onSubmit(){
		console.log(this.book);
	}
}