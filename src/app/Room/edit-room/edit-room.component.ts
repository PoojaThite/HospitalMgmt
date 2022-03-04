import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/Services/room.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  submitted = false;
  Roomform: FormGroup;
  RoomData: Room[] =[];
  constructor(public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private roomServices: RoomService,
    private router: Router) {

      this.Roomform = new FormGroup({
        TotalRoom: new FormControl('', { validators: [Validators.required] }),
        AvailableRoom: new FormControl('', { validators: [Validators.required] }),
      });
     }

  ngOnInit(): void {
    this.updateRoom();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getRoom(id);
  }

  get myForm() {
    return this.Roomform.controls
  }
  getRoom(id: any) {
    this.roomServices.getRoom(id).subscribe(data => {
      this.Roomform.setValue({
        RoomType: data['RoomType'],
        TotalRoom: data['TotalRoom'],
        AvailableRoom: data['AvailableRoom'],
      });
    });
  }

  updateRoom() {
    this.Roomform = this.fb.group({
      RoomType: new FormControl('',Validators.required),
      TotalRoom: new FormControl('',Validators.required),
      AvailableRoom: new FormControl('', Validators.required),
     
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.Roomform.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.roomServices.updateRoom(id, this.Roomform.value)
          .subscribe(res => {
            this.router.navigateByUrl('admin/listroom');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
      return true;
    }
  }
}
