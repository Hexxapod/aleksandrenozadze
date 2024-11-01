import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  displayArray(array: any[]) {
    console.log("Array is displayed by Display service");
    console.log(array);
  }
}


