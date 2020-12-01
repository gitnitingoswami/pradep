import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Singup } from './singup/singup.model';

@Injectable({
  providedIn: 'root'
})
export class FinalService {
 post:Singup[]=[
{
 
  name:'nitin',
  Email:'example@com',
  number:894504444,
  Password:'lkasjflkasjflkj',
  Gender:'MALE',
}

 ];

ia:number;
  constructor( public http:HttpClient) { }
save(data:Singup)
{
this.http.post('http://localhost:5000/api/addforms',data).subscribe((response)=>{
  console.log(response)
})
}
read(){
  this.http.get<{message:'string',data:Singup}>('http://localhost:5000/api/forms').subscribe((response)=>{
   console.log(response.data);
   this.post.push(response.data)
   console.log(this.post);
  })
  return this.post;
}
delete(I:any){
  this.post.splice(I,1);
}
edit(i:any){

this.ia=i;
console.log(this.ia);

}
edited(){
  console.log("service");
  console.log( this.post[this.ia]);
  return this.post[this.ia]
}
update(upda:Singup){
  this.post[this.ia].name=upda.name;
   this.post[this.ia].Email=upda.Email;
   this.post[this.ia].number=upda.number;
   this.post[this.ia].Password=upda.Password;
   this.post[this.ia].Gender=upda.Gender;

}




}
