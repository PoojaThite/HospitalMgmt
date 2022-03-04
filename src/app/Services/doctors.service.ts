import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoctor } from '../model/Doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  public url:string = "/assets/data/DoctorData.json"
  constructor(private http: HttpClient){}

  getDoctorDetails(): Observable<IDoctor[]>{
    return this.http.get<IDoctor[]>(this.url)
      }
}
