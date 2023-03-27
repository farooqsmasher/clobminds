import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup}  from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

  login:FormGroup|any;
  constructor(private _route:Router,private _http:HttpClient)  {
  }

  ngOnInit():void{
  this.login = new FormGroup({
      'email':new FormControl(),
      'password': new FormControl()
    })
  
  }
  logindata(login:FormGroup)
  {
        console.log(this.login.value);
        //  this. _http.get<any>("http://localhost:3000/login", this.login.value)
     
     }
  }


