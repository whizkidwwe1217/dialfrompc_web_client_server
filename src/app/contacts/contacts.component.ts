import { Component } from '@angular/core';

@Component({
    selector: 'dfp-contacts',
    styleUrls: ['./contacts.component.css'],
    templateUrl: './contacts.component.html'
})
export class ContactsComponent {
    contacts:any = [
        {
            fullName: 'Wendell Wayne H. Estrada',
            mobileNo: '09476951219',
            address: '26th Floor Tower 2 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Carline Key F. Capule',
            mobileNo: '09329610621',
            address: '16th Floor Tower 1 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        }
    ]
}