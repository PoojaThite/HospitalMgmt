import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './Admin/admin-portal/admin-portal.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { AboutComponent } from './Component/about/about.component';
import { CompanyTieUpsComponent } from './Component/company-tie-ups/company-tie-ups.component';
import { ContactComponent } from './Component/contact/contact.component';
import { DoctorComponent } from './Component/doctor/doctor.component';
import { HomeComponent } from './Component/home/home.component';
import { IPDAddmissionComponent } from './Component/ipdaddmission/ipdaddmission.component';
import { OPDScheduleComponent } from './Component/opdschedule/opdschedule.component';
import { AddMedicineComponent } from './Medicine/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './Medicine/edit-medicine/edit-medicine.component';
import { ListMedicineComponent } from './Medicine/list-medicine/list-medicine.component';
import { BookAppointmentComponent } from './Patient-Portal/book-appointment/book-appointment.component';
import { ListBookedAppointmentComponent } from './Patient-Portal/list-booked-appointment/list-booked-appointment.component';
import { PatientportalComponent } from './Patient-Portal/patientportal/patientportal.component';
import { AddPatientComponent } from './Patient/add-patient/add-patient.component';
import { EditPatientComponent } from './Patient/edit-patient/edit-patient.component';
import { ListPatientComponent } from './Patient/list-patient/list-patient.component';
import { AddRoomComponent } from './Room/add-room/add-room.component';
import { EditRoomComponent } from './Room/edit-room/edit-room.component';
import { ListRoomComponent } from './Room/list-room/list-room.component';
import { CreateTicketComponent } from './Ticket/create-ticket/create-ticket.component';
import { EditTicketComponent } from './Ticket/edit-ticket/edit-ticket.component';
import { ShowTicketComponent } from './Ticket/show-ticket/show-ticket.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignUpComponent},
  {path:'opd', component:OPDScheduleComponent},
  {path:'ipd', component:IPDAddmissionComponent},
  {path:'tieup', component:CompanyTieUpsComponent},
  {path:'admin', component:AdminPortalComponent},
  {
    path: 'admin', component: AdminPortalComponent,
    children: [
      {path:'',  component: ListPatientComponent},
      { path: 'addpatient', component: AddPatientComponent },
      { path: 'listpatient/editpatient/:id', component: EditPatientComponent },
      { path: 'listpatient', component: ListPatientComponent },
      { path: 'addmedicine', component: AddMedicineComponent },
      { path: 'listmedicine/editmedicine/:id', component: EditMedicineComponent },
      { path: 'listmedicine', component: ListMedicineComponent },
      { path: 'listmedicine', component: ListMedicineComponent },
      { path: 'addroom', component: AddRoomComponent },
      { path: 'listroom/editroom/:id', component: EditRoomComponent },
      { path: 'listroom', component: ListRoomComponent },
      {path:'appointment', component:BookAppointmentComponent},
      {path:'listappointment', component:ListBookedAppointmentComponent},

      {path:'appticket', component:CreateTicketComponent},
      { path: 'listticket/editticket/:id', component: EditTicketComponent },
      { path: 'listticket', component: ShowTicketComponent }

    ]

  },
  {path:'patient', component:PatientportalComponent,
  children:[

    // {path:'',component:BookAppointmentComponent},
    { path: 'listmedicine', component: ListMedicineComponent },
    { path: 'listroom', component: ListRoomComponent },
    {path:'appointment', component:BookAppointmentComponent},
    {path:'listappointment', component:ListBookedAppointmentComponent},
    {path:'appticket', component:CreateTicketComponent},

  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
