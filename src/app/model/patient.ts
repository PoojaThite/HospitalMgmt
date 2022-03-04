export class Patient {
    name: string;
    gender: string;
    age: string;
    bloodgroup: string;
    number:string;
    diease:string;
    concernDoctor:string;
    addmissionDate:Date;
    dischargeDate:Date;
    address:string;
    
    constructor(name: string, gender: string, age: string, bloodgroup: string,number:string,
        diease:string,
        concernDoctor:string,
        addmissionDate:Date,
        dischargeDate:Date,
        address:string){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.bloodgroup = bloodgroup;
        this.number = number;
        this.diease = diease;
        this.concernDoctor =concernDoctor;
        this.addmissionDate = addmissionDate;
        this.dischargeDate = dischargeDate;
        this.address = address

    }
}
