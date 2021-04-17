import { Component,OnInit } from '@angular/core';
import {Sonikunj} from './sonikunj';
import {PersonalDataService} from './personal-data.service';
import {CoursesBooks} from './coursesBooks';
import java from '../assets/data/java.json';
import cSharp from '../assets/data/cSharp.json';
import projectManagement from '../assets/data/projectManagement.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  javaBooks: CoursesBooks[] = java.java;
  cSharpBooks: CoursesBooks[] = cSharp.cSharp;
  projectManagementBooks: CoursesBooks[] = projectManagement.projectManagement;

  title = 'sonikunj-A4';

  myPData : Sonikunj;

  ngOnInit(){
    this.ldData();
  }

  constructor(private myService : PersonalDataService){}

  ldData():void{
    this.myPData = this.myService.ldData();
  }
}
