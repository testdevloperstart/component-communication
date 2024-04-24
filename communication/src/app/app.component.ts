import { Component } from '@angular/core';
import { entries } from './interface'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // we have created a new variable of array
  // enteries is the interface json object created and in interface.ts
  detailsArray: Array<entries> = [{fullname:'satvika',companyname:'hierpro',employeeid:10688}];

  // here we created a function and passed a parameater to it. newroll is a variable created and assigned entries to it
  newentries(newroll:entries){
      this.detailsArray.push(newroll)
  }
}
