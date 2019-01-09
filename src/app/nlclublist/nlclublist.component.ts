import { Component, OnInit } from '@angular/core';
import { nlclub } from '../nlclub.model';
import { environment } from '../../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nlclublist',
  templateUrl: './nlclublist.component.html',
  styleUrls: ['./nlclublist.component.css']
})
export class NlclublistComponent implements OnInit {

	clubs: Map<string, nlclub> = new Map();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {


  	const config = environment.clubs;

  	for (let club of config){
     this.clubs.set(club[0], new nlclub(club[0], club[1], club[2], club[3], club[4], club[5], club[6], club[7], club[8], club[9], club[10], club[11], club[12], club[13], club[14]));
    }


  }

}
