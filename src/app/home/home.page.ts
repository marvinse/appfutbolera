import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  matches = [];

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
