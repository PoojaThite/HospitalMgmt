import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

  submitted = false;
  editTicketForm: FormGroup;
  ticketData: Ticket[] =[];
  constructor(public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private ticketServices: TicketService,
    private router: Router) {
      this.editTicketForm = new FormGroup({
        date: new FormControl('', {validators: [Validators.required]}),
        name: new FormControl('', { validators: [Validators.required] }),
        problem: new FormControl('', { validators: [Validators.required] }),
      });
    }
  ngOnInit(): void {

    this.updateTicket();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getTicket(id);
  }

  get myForm() {
    return this.editTicketForm.controls
  }


  getTicket(id: any) {
    this.ticketServices.getTicket(id).subscribe(data => {
      this.editTicketForm.setValue({
        date: data['date'],
        name: data['name'],
        problem: data['problem'],
      });
    });
  }


  updateTicket() {
    this.editTicketForm = this.fb.group({
      date: new FormControl('', {validators: [Validators.required]}),
      name: new FormControl('', { validators: [Validators.required] }),
      problem: new FormControl('', { validators: [Validators.required] }),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editTicketForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.ticketServices.updateTicket(id, this.editTicketForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('admin/listticket');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
      return true;
    }
  }
}
