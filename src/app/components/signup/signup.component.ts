import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder,Validators } from '@angular/forms';
import { RouterModule ,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  
 public signup !: FormGroup;
  public signuser :any
  constructor(private formbuilder: FormBuilder,private _route:Router, private http:HttpClient,private toast:ToastrService ){ }
    // signup:FormGroup|any;
    get fname() { return this.signup.get('fname');}
    get lname() { return this.signup.get('lname');}
    get phone() { return this.signup.get('phone');}
    get email() { return this.signup.get('email');}
    get password() { return this.signup.get('password');}
  ngOnInit(): void {
   this.signup = this.formbuilder.group({
    fname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-zA-Z ]*')]],
    lname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern('[0-9]{10}')]],
    password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
    // 'fname': new FormControl(),
    // 'lname': new FormControl(),
    // 'email': new FormControl(),
    // 'phone': new FormControl(),
    // 'password':new FormControl

   }) 
  }
  signupdata(signup:FormGroup){
    console.warn(this.signup);
    // console.log(this.signup.value);
    this.signuser = this.signup.value.fname;
    this.http.post<any>(' http://localhost:3000/signup',this.signup.value)
    .subscribe(res=>{
      // alert(this.signuser+'successfully signed in....');
      this.toast.success(this.signuser,'successfully signed in....');
      this.signup.reset();
      this._route.navigate(['login']);
    },err=>{
      alert("something went wrong")
    })

   
  }
  // sbtn() {
  //   this._route.navigate(['login']);
  //   $('.form-box').css('display','block');
  //   $('. form-box1').css('display','none');
  // }
 
}
