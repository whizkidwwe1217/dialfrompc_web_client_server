import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'dfp-contacts',
    styleUrls: ['./contacts.component.css'],
    templateUrl: './contacts.component.html'
})
export class ContactsComponent {
    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            fullName: ["", Validators.required],
            mobileNo: ["", Validators.required],
            address: new FormControl()
        });
    }
    
    selectedContact: {};
    contactForm: FormGroup;
    
    onContactClick(e, contact): void {
        this.selectedContact = contact;
        this.contactForm.patchValue(this.selectedContact);
    }
    
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
        },
        {
            fullName: 'Wendell Wayne H. Estrada',
            mobileNo: '09476951219',
            address: '26th Floor Tower 2 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Carline Key F. Capule',
            mobileNo: '09329610621',
            address: '16th Floor Tower 1 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Wendell Wayne H. Estrada',
            mobileNo: '09476951219',
            address: '26th Floor Tower 2 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Carline Key F. Capule',
            mobileNo: '09329610621',
            address: '16th Floor Tower 1 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Wendell Wayne H. Estrada',
            mobileNo: '09476951219',
            address: '26th Floor Tower 2 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Carline Key F. Capule',
            mobileNo: '09329610621',
            address: '16th Floor Tower 1 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Wendell Wayne H. Estrada',
            mobileNo: '09476951219',
            address: '26th Floor Tower 2 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Carline Key F. Capule',
            mobileNo: '09329610621',
            address: '16th Floor Tower 1 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Wendell Wayne H. Estrada',
            mobileNo: '09476951219',
            address: '26th Floor Tower 2 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Carline Key F. Capule',
            mobileNo: '09329610621',
            address: '16th Floor Tower 1 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Wendell Wayne H. Estrada',
            mobileNo: '09476951219',
            address: '26th Floor Tower 2 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
        {
            fullName: 'Carline Key F. Capule',
            mobileNo: '09329610621',
            address: '16th Floor Tower 1 The Enterprise Center, Ayala Avenue cor Paseo de Roxas, Makati City'
        },
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