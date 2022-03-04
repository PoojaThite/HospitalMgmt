import { Component, OnInit ,NgZone} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/Services/ticket.service';
@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  ticketForm: FormGroup
  submitted = false;
  nameTicket:string = '';
  isSubmiited:boolean = false
  constructor(private ngZone: NgZone,
    private router: Router,
    private ticketServices: TicketService) {
    this.ticketForm = new FormGroup({
      date: new FormControl('', {validators: [Validators.required]}),
      name: new FormControl('', { validators: [Validators.required] }),
      problem: new FormControl('', { validators: [Validators.required] }),
    });
  }

  ngOnInit(): void {
  }
  get myForm() {
    return this.ticketForm.controls
  }

  onSubmit() {
    this.submitted = true;
    if (!this.ticketForm.valid) {
      return false;
    } else {
      this.ticketServices.createTicket(this.ticketForm.value).subscribe(
        (res) => {
          console.log('ticket successfully created!')
          this.nameTicket = "Ticket Generate Successfully"
          this.isSubmiited = true;
          
          // this.ngZone.run(() => this.router.navigateByUrl('admin/listticket'))
        }, (error) => {
          console.log(error);
        });
      return true;
    }
  }
}
