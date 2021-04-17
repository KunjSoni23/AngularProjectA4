import { Component, OnInit,Input } from '@angular/core';
import {CoursesBooks} from '../coursesBooks';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() javaBooksList: CoursesBooks;
  @Input() cSharpBooksList: CoursesBooks;
  @Input() projectManagementBooksList: CoursesBooks;

  constructor() { }

  ngOnInit(): void {
  }

}
