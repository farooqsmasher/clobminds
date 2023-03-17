import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  
 public signup !: FormGroup;
  constructor(private formbuilder: FormBuilder ){ }
    // signup:FormGroup|any;
 
  ngOnInit(): void {
   this.signup = this.formbuilder.group({
    fname:[''],
    lname:[''],
    email:[''],
    phone:[''],
    password:['']
    // 'fname': new FormControl(),
    // 'lname': new FormControl(),
    // 'email': new FormControl(),
    // 'phone': new FormControl(),
    // 'password':new FormControl

   }) 
  }
  signupdata(signup:FormGroup){
    console.log(this.signup.value);
   
  }
 
}
