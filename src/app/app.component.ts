import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navItems = [
    { name: 'Home', route: 'home', icon: 'home' },
    { name: 'Contacts', route: 'contacts', icon: 'contacts' },
    { name: 'History', route: 'history', icon: 'restore' }
  ];
}
