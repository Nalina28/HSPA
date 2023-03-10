import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector'
import {Component} from '@angular/core'

@Component({
  selector: 'app-property-card',
  //template:`<h1>I am a card</h1>`,
  templateUrl: 'property-card.component.html',
 styleUrls: ['property-card.component.css'],

})
export class PropertyCardComponent{
 Property : any = {
  "Id": 1,
  "Type":"House",
  "Price":12000,
  "Name":"Birla House",
 }
}
