import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	
  name:string;
  age:number;
  address:Address;
  hobbies:string[];
  posts:Post[];

  constructor(private dataService:DataService) {
  	console.log('constructor ran');
  }

  ngOnInit() {
  	console.log('ngoninti ran');
  	this.name ='vijay manral';
  	this.age=45;
  	this.address ={
  		street:'123 abc st',
  		city:'dehradun',
  		state:'UK'
  	}
  	this.hobbies= ['write code','watching movies','playing game']

    this.dataService.getPosts().subscribe((posts)=> {
      this.posts = posts;
    })

  	
  }
  onClick(){
  	
  	this.hobbies.push(' gaming');
  }

  addHobby(hobby){
  	this.hobbies.unshift(hobby);
  	return false;
  }
  deleteHobby(hobby){
  	for(let i=0;i < this.hobbies.length;i++){
  		if(this.hobbies[i]== hobby){
  			this.hobbies.splice(i,1);
  		}
  	}

  }
  	
  }
  interface Address{
  	street:string,
  	city:string,
  	state:string
  }
  interface Post{
    id:number,
    title:string,
    body:string,
    userId:number
  }
