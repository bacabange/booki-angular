import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksListComponent } from './components/books-list.component';
import { BookDetailComponent } from './components/book-detail.component';

const appRoutes: Routes = [
	{ path: '', component: BooksListComponent },
	{ path: 'book/:id', component: BookDetailComponent },
	{ path: '**', component: BooksListComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);