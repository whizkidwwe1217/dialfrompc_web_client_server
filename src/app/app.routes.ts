import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'home', component: HomeComponent }
];