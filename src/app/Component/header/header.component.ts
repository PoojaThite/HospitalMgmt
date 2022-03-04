import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  userType: String | null=''
  //  User : any =[];
  // type:string = '';
  constructor(public authService: AuthService) {

    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  ngOnInit(): void {

    this.authService.authTypeListenerObservable.subscribe(str => {
      this.userType = str;
    
    });
    console.log(this.userType);
  }

  onLogout() {
    this.authService.logout();
    // this.userType = ''
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}

