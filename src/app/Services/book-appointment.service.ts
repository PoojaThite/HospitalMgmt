import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookAppointmentService {

  baseUri:string = 'http://localhost:3000'; // Backend URL (Server)
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) { }

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUri}/appointments`);
  }

  createAppointment(appointmentDate: string, name: string, email: string, UId:any): Observable<any> {
    return this.http.post<any>(`${this.baseUri}/appointments`, { appointmentDate, name, email, UId});
  }

  cancelAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.baseUri}/appointments/${id}`);
  }
}
