import { Component, OnInit, Input } from '@angular/core';
import { Sonikunj } from '../sonikunj';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headInfo: Sonikunj;

  constructor() { }

  ngOnInit(): void {
  }

}
