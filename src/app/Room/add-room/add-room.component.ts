import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  Roomform: FormGroup
  submitted = false;
  constructor(private ngZone: NgZone,
    private router: Router,
    private roomServices: RoomService) {
    this.Roomform = new FormGroup({
      RoomType: new FormControl('', {validators: [Validators.required]}),
      TotalRoom: new FormControl('', { validators: [Validators.required] }),
      AvailableRoom: new FormControl('', { validators: [Validators.required] }),
    });
  }

  ngOnInit(): void {
  }
  get myForm() {
    return this.Roomform.controls
  }

  onSubmit() {
    this.submitted = true;
    if (!this.Roomform.valid) {
      return false;
    } else {
      this.roomServices.createRoom(this.Roomform.value).subscribe(
        (res) => {
          console.log('Ticket successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('admin/listroom'))
        }, (error) => {
          console.log(error);
        });
      return true;
    }
  }

}
