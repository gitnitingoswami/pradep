import { Component, OnInit } from '@angular/core';
import { Singup } from '../singup/singup.model';
import { FinalService } from './../final.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public data:FinalService,public router:Router) {
 console.log("service ou"+this.Data);
 console.log("service ou"+ this.data.read());
   }
  
   Data=this.data.read();

 save(sing:Singup){
  this.data.save(sing);

 }
 edit(i:number){
   console.log("update");
   this.data.edit(i);
   this.router.navigate(['edit']);

 }
 delete(i:number){
  console.log("click");
  this.data.delete(i);

}
  /*
    
   
   model={
     name:'',Email:'',number:'',Password:'',Gender:''
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
     
   }*/
  ngOnInit(): void {
  }

}
