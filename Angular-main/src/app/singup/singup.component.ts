import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Form, FormControl,FormGroup } from '@angular/forms';

import {Singup} from 'src/app/singup/singup.model'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingupComponent implements OnInit {
 singup:Singup[]=[
  
  ]
  constructor() {
    
   }
 
   save(sing:Singup){
    console.log('click');
    console.log(sing.name);
this.singup.push(sing);
console.table(sing)
}
  delete(i:number){

    console.log(i);
   this.singup.splice(i,1);
    console.log("click");

  }
  model={
    name:'',Email:'',number:0,Password:'',Gender:''
  }
 
  edi:number;
  edit:boolean=false;
  update(i:number)
  {
    this.edit=true;
    console.log("update" ,i);
    this.model.name=this.singup[i].name
    this.model.Email=this.singup[i].Email
    this.model.number=this.singup[i].number
    this.model.Password=this.singup[i].Password
    this.model.Gender=this.singup[i].Gender
    this.edi=i;
}
  updated(upda:any){
    console.log(upda);
    this.edi
    this.singup[this.edi]=this.model;
    this.edit=false;
    
  }

  ngOnInit(): void {
  }

}