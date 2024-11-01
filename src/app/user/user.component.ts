import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
ChildUser= [
  { id: 1, firstname: 'John', lastname: 'Doe', dateOfBirth: new Date(2002, 3, 12), phoneNumber: '555555555', email: 'johndoe@example.com' },
  { id: 2, firstname: 'Jane', lastname: 'Doe', dateOfBirth: new Date(2009, 7, 3), phoneNumber: '555123456', email: 'janedoe@example.com' },
  { id: 3, firstname: 'Dexter', lastname: 'Morgan', dateOfBirth: new Date(1996, 2, 11), phoneNumber: '555777777', email: 'dextermorgan@example.com' },
  { id: 4, firstname: 'James', lastname: 'Doakes', dateOfBirth: new Date(1991, 1, 5), phoneNumber: '555666666', email: 'jamesdoakes@example.com' },
  { id: 5, firstname: 'Shara', lastname: 'Magomedov', dateOfBirth: new Date(2006, 9, 8), phoneNumber: '555777777', email: 'dextermorgan@example.com' },

];
}

export interface ParentUser{
  id: number;
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
  phoneNumber: string;
  email:string;
}
export interface ChildUser{
  id: number;
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
  phoneNumber: string;
  email:string;
}


