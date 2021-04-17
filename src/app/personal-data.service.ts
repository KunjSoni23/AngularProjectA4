import { Injectable } from '@angular/core';
import {Sonikunj} from './sonikunj';
import {SONIKUNJ} from '../assets/data/myData';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  constructor() { }

  ldData():Sonikunj{
    return SONIKUNJ;
  }
}
