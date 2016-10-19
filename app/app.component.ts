import { Component } from '@angular/core';
import './rxjs-extensions';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	styleUrls: [ 'app.component.css' ],
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
			<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {
  title = 'Tour of Heroes';
}