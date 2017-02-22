import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksListComponent } from './components/books-list.component';
import { BookDetailComponent } from './components/book-detail.component';
import { BookFormComponent } from './components/book-form.component';
import { BookEditComponent } from './components/book-edit.component';

const appRoutes: Routes = [
	{ path: '', component: BooksListComponent },
	{ path: 'book/:id', component: BookDetailComponent },
	{ path: 'book-create', component: BookFormComponent },
	{ path: 'book-edit/:id', component: BookEditComponent },
	{ path: '**', component: BooksListComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);