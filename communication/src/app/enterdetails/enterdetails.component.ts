import { Component, EventEmitter, Output } from '@angular/core';
import { entries } from '../interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-enterdetails',
  templateUrl: './enterdetails.component.html',
  styleUrl: './enterdetails.component.css'
})
export class EnterdetailsComponent {

  // this child component will emit the the data , we are using EventEmitter function

  @Output() newdatails:EventEmitter<entries>=new EventEmitter()



  onSubmit(form :NgForm){

    const newEmployee:entries={
      fullname:form.value['fullname'],
      companyname:form.value['company'],
      employeeid:form.value['id']
    }
    
    this. newdatails.emit(newEmployee)

    form.reset();

  }
}
