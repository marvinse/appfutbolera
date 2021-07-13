import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private matches = [
    {
      id: 1,
      teamA : 'Costa Rica',
      teamB : 'Uruguay',
      finished: false,
      score: '3 - 1',
      events: [
        'Gol Cavanni al min 24',
        'Tarjeta amarilla para Lugano al min 29',
        'Gol Campbell al min 54',
        'Gol Duarte al min 57',
        'Gol Ureña al min 86',
      ]
    },
    {
      id: 2,
      teamA : 'Costa Rica',
      teamB : 'Italia',
      finished: true,
      score: '1 - 0',
      events: [
        'Gol Ruiz al min 41',
      ]
    },
    {
      id: 3,
      teamA : 'Costa Rica',
      teamB : 'Inglaterra',
      finished: true,
      score: '0 - 0',
      events: [
        'Penal para Costa Rica al minuto 12',
      ]
    },
    {
      id: 4,
      teamA : 'Costa Rica',
      teamB : 'Grecia',
      finished: true,
      score: '1 - 1',
      events: [
        'Gol de Ruiz al min 14',
      ]
    }
  ]

  constructor() { }

  getMatches(){
    return this.matches;
  }

  getMatch(id: Number){
    return this.matches.find(match => match.id == id);
  }

  deleteMatch(id: Number){
    this.matches = this.matches.filter(match => match.id != id);
  }

}
