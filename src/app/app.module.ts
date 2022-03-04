import { Host, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './Patient/add-patient/add-patient.component';
import { EditPatientComponent } from './Patient/edit-patient/edit-patient.component';
import { ListPatientComponent } from './Patient/list-patient/list-patient.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMedicineComponent } from './Medicine/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './Medicine/edit-medicine/edit-medicine.component';
import { ListMedicineComponent } from './Medicine/list-medicine/list-medicine.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { DoctorComponent } from './Component/doctor/doctor.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { HomeComponent } from './Component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './Auth/auth.service';
import { AuthInterceptor } from './Auth/auth-interceptor';
import { PatientportalComponent } from './Patient-Portal/patientportal/patientportal.component';
import { BookAppointmentComponent } from './Patient-Portal/book-appointment/book-appointment.component';
import { ListBookedAppointmentComponent } from './Patient-Portal/list-booked-appointment/list-booked-appointment.component';
//
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminPortalComponent } from './Admin/admin-portal/admin-portal.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { AddRoomComponent } from './Room/add-room/add-room.component';
import { EditRoomComponent } from './Room/edit-room/edit-room.component';
import { ListRoomComponent } from './Room/list-room/list-room.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { OPDScheduleComponent } from './Component/opdschedule/opdschedule.component';
import { IPDAddmissionComponent } from './Component/ipdaddmission/ipdaddmission.component';
import { CompanyTieUpsComponent } from './Component/company-tie-ups/company-tie-ups.component';
import { CreateTicketComponent } from './Ticket/create-ticket/create-ticket.component';
import { ShowTicketComponent } from './Ticket/show-ticket/show-ticket.component';
import { EditTicketComponent } from './Ticket/edit-ticket/edit-ticket.component';
@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    EditPatientComponent,
    ListPatientComponent,
    AddMedicineComponent,
    EditMedicineComponent,
    ListMedicineComponent,
    HeaderComponent,
    FooterComponent,
    DoctorComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    AdminPortalComponent,
    LoginComponent,
    SignUpComponent,
    AddRoomComponent,
    EditRoomComponent,
    ListRoomComponent,
    PatientportalComponent,
    BookAppointmentComponent,
    ListBookedAppointmentComponent,
    OPDScheduleComponent,
    IPDAddmissionComponent,
    CompanyTieUpsComponent,
    CreateTicketComponent,
    ShowTicketComponent,
    EditTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatGridListModule,MatButtonModule,MatCardModule,MatInputModule,MatSidenavModule,MatFormFieldModule,
    MatSelectModule,MatDatepickerModule,MatNativeDateModule,
    MatSortModule,MatProgressSpinnerModule,
    MatTableModule,MatTabsModule,MatIconModule
  ],
  providers: [AuthService,{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
