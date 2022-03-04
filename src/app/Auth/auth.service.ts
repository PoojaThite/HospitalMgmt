import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: string='';
  private tokenTimer: any; 
  private UserType: string=''

  private UserId : any;
  private authUserIdListener = new Subject<any>();
  private authStatusListener = new Subject<boolean>();
  private authTypeListener = new Subject<string>();
  authTypeListenerObservable = this.authTypeListener.asObservable();
  authUserIdListenerObervable = this.authUserIdListener.asObservable();

  getuserById(id:any){
this.authUserIdListener.next(id);
  }
  push(str: string){
    this.authTypeListener.next(str);
  }
  
  baseUri:string = 'http://localhost:3000'; // Backend URL (Server)
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(name:string,email: string,type:string, password: string) {
    const authData: AuthData = { name:name,email: email, type: type, password: password };
    this.http
      .post("http://localhost:3000/signup", authData)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(["/login"]);
      });
  }

  login(email: string,password:string) {
    const authData: any = { email: email, password: password };
    this.http
      .post<{ token: string; expiresIn: number, type:string, userId:any }>(
        "http://localhost:3000/login",
        authData
      )
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        console.log(token);
        if (token) {
          const expiresInDuration = response.expiresIn;   // from user.js expired infomation
          console.log("User Expired within : "+ expiresInDuration);
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate,response.type);
          this.push(response.type);
          this.getuserById(response.userId);
          this.UserType = response.type;
          if(this.UserType === 'Admin'){
            this.router.navigate(["/admin"]);
          }
          else{
            this.router.navigate(["/patient"]);
          }
        }
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = " ";
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.UserType =' '
    this.router.navigate(["/"]);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, type:string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem('UserType', type)
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem('UserType');
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const type = localStorage.getItem("UserType");
    if (!token || !expirationDate) {
      return 0;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      type: type
    }
  }
}
