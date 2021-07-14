import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { match } from '../models/match.model';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  matches : match[] = [];

  constructor(private router: Router, private matchesService: MatchesService) {}

  goToSummary(id: Number){
    this.router.navigateByUrl('summary/'+id)
  }

  ngOnInit(){
    this.matches = this.matchesService.getMatches();
  }

  ionViewWillEnter(){
    this.matches = this.matchesService.getMatches();
  }
}
