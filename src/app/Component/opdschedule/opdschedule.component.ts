import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  Day: string;
  consultant: string;
  morning: string;
  evening: string;
}




const ELEMENT_DATA: PeriodicElement[] = [
  { Day: 'Saturday', morning: "-------", evening: '5pm - 8pm',consultant:"Dr. Vijay Kumar"},
  { Day: 'Mon - Tue', morning: "8am - 12pm", evening: '3pm - 8pm',consultant:"Dr. Kishor Jai"},
  { Day: 'Tue - frid', morning: "9am - 12pm", evening: '3pm - 8pm',consultant:"Dr. Rajat Jain"},
  { Day: 'All Week Day Mon-Fri', morning: "8am - 12pm", evening: '3pm - 8pm',consultant:"Dr. Laxmi Kumar"},
 
  
];
const ELEMENT_DATA1: PeriodicElement[] = [
  { Day: 'Saturday', morning: "-------", evening: '5pm - 8pm',consultant:"Dr. Sanjay Kumar"},
  { Day: 'Mon - Tue', morning: "8am - 12pm", evening: '3pm - 8pm',consultant:"Dr. Nayana Deshmuh"},
  { Day: 'Tue - frid', morning: "9am - 12pm", evening: '3pm - 8pm',consultant:"Dr. Rajat Jain"},
 
  
];
const ELEMENT_DATA2: PeriodicElement[] = [
  { Day: 'Saturday', morning: "-------", evening: '5pm - 8pm',consultant:"Dr. Sanjay Kumar"},
  { Day: 'Mon - Tue', morning: "8am - 12pm", evening: '3pm - 8pm',consultant:"Dr. Nayana Deshmuh"},
  { Day: 'sun - frid', morning: "9am - 12pm", evening: '3pm - 8pm',consultant:"Dr. Rajat Jain"},
  { Day: 'Tue - frid', morning: "9am - 12pm", evening: '3pm - 8pm',consultant:"Dr. Laxmi Kumar"},
  { Day: 'mon - frid', morning: "9am - 12pm", evening: '3pm - 8pm',consultant:"Dr. Ram thakur"},
 
  
];
@Component({
  selector: 'app-opdschedule',
  templateUrl: './opdschedule.component.html',
  styleUrls: ['./opdschedule.component.css']
})
export class OPDScheduleComponent implements OnInit {
  displayedColumns: string[] = ['Day', 'morning', 'evening', 'consultant'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;
  dataSource2 = ELEMENT_DATA2;


  
  constructor() { }

  ngOnInit(): void {
  }

}
