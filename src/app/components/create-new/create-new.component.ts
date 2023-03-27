import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup}  from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  createnew:FormGroup|any;
  constructor(private _route:Router, private _http:HttpClient)  {
  }

  ngOnInit():void{
  this.createnew = new FormGroup({
      'email':new FormControl(),
      'password': new FormControl(),
      'fname' : new FormControl(),
      'lname': new FormControl(),
      'phno': new FormControl()
      
    })
  
  }
  createnewdata(createnew:FormGroup)
  {
   console.log(this.createnew.value);
    //  this. _http.post<any>("http://localhost:3000/createnew", this.createnew.value)
     
     }
}
