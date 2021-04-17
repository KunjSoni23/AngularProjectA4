import { Component, OnInit, Input } from '@angular/core';
import { Sonikunj } from '../sonikunj';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footInfo: Sonikunj;

  constructor() { }

  ngOnInit(): void {
  }

}
