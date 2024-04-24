import { Component, Input, input } from '@angular/core';
import { entries } from '../interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() displaydetails:Array<entries>=[]
}
