
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder,Validators } from '@angular/forms';
import { RouterModule ,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  login:FormGroup|any;
  constructor(private formbuilder: FormBuilder,private _route:Router, private http:HttpClient,private toast:ToastrService ){ }
 get email() { return this.login.get('email');}
 get password() { return this.login.get('password');}
  ngOnInit(): void {
   this.login = new FormGroup({
    'email': new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',Validators.required)

   }) 
  }
  logindata(login:FormGroup){
    // console.log(this.login.value);
    console.warn(this.login);
    this.http.get<any>('http://localhost:3000/signup').subscribe(res=>{
      const user =res.find((a : any)=>{
        return a.email === this.login.value.email && a.password === this.login.value.password
      });
      if(user){
        alert('you are successfully logged in..');
        this.login.reset();
      
        
        this._route.navigate(['dashboard']);
      }
      else {
        alert('user not found!please signup');
        this._route.navigate(['login']);
      }
    },err=> {
      alert('something was wrong');
    })
  }
}
