export class Appointment {
  
    appointmentDate: string;
    name: string;
    email: string;
    UId:any;
    constructor( appointmentDate: string,
        name: string,
        email: string,
        UId:any){
            this.appointmentDate = appointmentDate;
            this.name = name;
            this.email = email;
            this.UId = UId;
        }
}
