import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Auth/auth.service';
import { Subscription } from 'rxjs';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent implements OnInit {
  Ticket : any = [];

  isLoading = false
  
userIsAuthenticated =false;
private authStatusSub: Subscription = new Subscription;
  constructor(private ticketServices : TicketService,
    private authService:AuthService) { }

  ngOnInit(): void {

    this.readTicket();

    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated =>{
 this.userIsAuthenticated = isAuthenticated;
    });
  }
  readTicket(){
    this.ticketServices.getTickets().subscribe((data) => {
     this.Ticket = data;
    })    
  }

  removeTicket(ticket: any, index: number) {
    if(window.confirm('Are you sure?')) {
        this.ticketServices.deleteTicket(ticket._id).subscribe((data) => {
          this.Ticket.splice(index, 1);
        }
      )    
    }
  }

}
