import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './views/home.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public title: string;
	public description: string;

	constructor() {
		this.title = 'Booki App';
		this.description = 'Booki es una aplicación que permite guardar el progreso que llevamos leyendo uno o varios libros.';
	}
}
