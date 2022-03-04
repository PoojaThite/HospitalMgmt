import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/Services/room.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Auth/auth.service';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {
  Room: any = [];

  isLoading = false
  userType: String = ''

  userIsAuthenticated = false;
  private authStatusSub: Subscription = new Subscription;
  constructor(private roomServices: RoomService,
    private authService: AuthService) { }

  ngOnInit(): void {

this.authService.authTypeListenerObservable.subscribe(str =>{
  this.userType = str;
});


    this.readRoom();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });


  }
  readRoom() {
    this.roomServices.getRooms().subscribe((data) => {
      this.Room = data;
    })
  }

  removeMedicine(medicine: any, index: number) {
    if (window.confirm('Are you sure?')) {
      this.roomServices.deleteRoom(medicine._id).subscribe((data) => {
        this.Room.splice(index, 1);
      }
      )
    }
  }
}
