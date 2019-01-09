import { Component, Input, OnInit } from '@angular/core';
import { nlclub } from '../nlclub.model';
import { environment } from '../../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nlclubsingle',
  templateUrl: './nlclubsingle.component.html',
  styleUrls: ['./nlclubsingle.component.css']
})
export class NlclubsingleComponent implements OnInit {


  clubs: Map<string, nlclub> = new Map();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  const clubParam: string = this.route.snapshot.params['id'];

  const config = environment.clubs;


  	if (clubParam){
  	  for (let club of config){
  	    if (club[0] == clubParam){
  	    	this.clubs.set(club[0], new nlclub(club[0], club[1], club[2], club[3], club[4], club[5], club[6], club[7], club[8], club[9], club[10], club[11], club[12], club[13], club[14]));
  	    }
  	  }
  	}


  }

}
