import { Component, Input, OnInit } from '@angular/core';
import { nlclub } from '../nlclub.model';

@Component({
  selector: 'app-nlclubsingleinhalt',
  templateUrl: './nlclubsingleinhalt.component.html',
  styleUrls: ['./nlclubsingleinhalt.component.css']
})
export class NlclubsingleinhaltComponent implements OnInit {

	@Input () club: nlclub;

  constructor() { }

  ngOnInit() {
  }

}
