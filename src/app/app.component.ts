import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
 

  title = 'Midterm Aleksandre Nozadze';

  users=[
    {firstname: 'John', lastname: 'Doe', age:'22' },
    {firstname: 'Jane', lastname: 'Doe', age:'15' },
    {firstname: 'Dexter', lastname: 'Morgan', age:'28' },
    {firstname: 'James', lastname: 'Doakes', age:'33' },
    {firstname: 'Shara', lastname: 'Magomedov', age:'18' },
  ]
  ParentUser= [
    { id: 1, firstname: 'John', lastname: 'Doe', dateOfBirth: new Date(2002, 3, 12), phoneNumber: '555555555', email: 'johndoe@example.com' },
    { id: 2, firstname: 'Jane', lastname: 'Doe', dateOfBirth: new Date(2009, 7, 3), phoneNumber: '555123456', email: 'janedoe@example.com' },
    { id: 3, firstname: 'Dexter', lastname: 'Morgan', dateOfBirth: new Date(1996, 2, 11), phoneNumber: '555777777', email: 'dextermorgan@example.com' },
    { id: 4, firstname: 'James', lastname: 'Doakes', dateOfBirth: new Date(1991, 1, 5), phoneNumber: '555666666', email: 'jamesdoakes@example.com' },
    { id: 5, firstname: 'Shara', lastname: 'Magomedov', dateOfBirth: new Date(2006, 9, 8), phoneNumber: '555777777', email: 'dextermorgan@example.com' },
  
  ];
  userForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
    email: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="p-4 border rounded">
}
export interface User{
  id: number;
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
  phoneNumber: string;
  email:string;
  
}
