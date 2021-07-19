/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private matches : match[] = [
    {
      id: 1,
      teamA : 'FC Barcelona',
      logoTeamA : './assets/equipos/Barcelona.png',
      teamB : 'Real Madrid',
      logoTeamB : './assets/equipos/Real_Madrid.png',
      finished: false,
      score: '2 - 1',
      events: [
        {minute: 0+ ' min', event: ' Inicio del Partido', image: 'https://image.flaticon.com/icons/png/512/2213/2213579.png'},
        {minute: 24+' min', event: ' Goool de Messi', image: 'https://image.flaticon.com/icons/png/512/1800/1800944.png'},
        {minute: 29+' min', event: ' Tarjeta Amarilla a Benzema', image: 'https://cdn.iconscout.com/icon/free/png-256/yellow-card-1911102-1613794.png'},
        {minute: 54+' min', event: ' Goool de Bale', image: 'https://image.flaticon.com/icons/png/512/1800/1800944.png'},
        {minute: 57+' min', event: ' Tarjeta Roja a Pique', image: 'https://image.flaticon.com/icons/png/512/451/451718.png'},
        {minute: 75+' min', event: ' Goool de Griezmann', image: 'https://image.flaticon.com/icons/png/512/1800/1800944.png'},
      ]
    },
    {
      id: 2,
      teamA : 'FC Bayern',
      logoTeamA : './assets/equipos/Bayern.png' ,
      teamB : 'Chelsea',
      logoTeamB : './assets/equipos/Chelsea.png',
      finished: true,
      score: '1 - 0',
      events: [
        {minute: 0+  ' min', event: ' Inicio del Partido', image: 'https://image.flaticon.com/icons/png/512/2213/2213579.png'},
        {minute: 26+ ' min', event: ' Tiro Libre para el Bayern', image: 'https://image.flaticon.com/icons/png/512/867/867329.png'},
        {minute: 45+ ' min', event: ' Remate y Goool de Lewandowski', image: 'https://image.flaticon.com/icons/png/512/861/861512.png'},
        {minute: 70+ ' min', event: ' Gran atajada x parte del Chelsea', image: 'https://image.flaticon.com/icons/png/512/1654/1654404.png'},
        {minute: 90+ ' min', event: ' Partido Finalizado', image: 'https://image.flaticon.com/icons/png/512/1505/1505471.png'}
      ]
    },
    {
      id: 3,
      teamA : 'PSG',
      logoTeamA : './assets/equipos/psg.png' ,
      teamB : 'Juventus',
      logoTeamB : './assets/equipos/Juventus.png',
      finished: true,
      score: '1 - 2',
      events: [
        {minute: 0+ ' min', event: ' Inicio del Partido', image: 'https://image.flaticon.com/icons/png/512/2213/2213579.png'},
        {minute: 24+' min', event: ' Goool de Cristiano Ronaldo', image: 'https://image.flaticon.com/icons/png/512/1800/1800944.png'},
        {minute: 57+' min', event: ' Tarjeta Amarilla a Mbappe', image: 'https://image.flaticon.com/icons/png/512/3363/3363491.png'},
        {minute: 54+' min', event: ' Gooolazo de Neymar', image: 'https://image.flaticon.com/icons/png/512/2726/2726007.png'},
        {minute: 29+' min', event: ' Cambio de Jugadores', image: 'https://image.flaticon.com/icons/png/512/861/861522.png'},
        {minute: 86+' min', event: ' Goool del gran Dybala', image: 'https://image.flaticon.com/icons/png/512/1800/1800944.png'},
        {minute: 90+ ' min', event: ' Partido Finalizado', image: 'https://image.flaticon.com/icons/png/512/1505/1505471.png'}
      ]
    },
    {
      id: 4,
      teamA : 'Inter',
      logoTeamA : './assets/equipos/Inter.png' ,
      teamB : 'Atletico Madrid',
      logoTeamB : './assets/equipos/Atletico_Madrid.png',
      finished: true,
      score: '1 - 1',
      events: [
        {minute: 0+  ' min', event: ' Inicio del Partido', image: 'https://image.flaticon.com/icons/png/512/2213/2213579.png'},
        {minute: 26+ ' min', event: ' Tiro de Esquina para el Inter', image: 'https://image.flaticon.com/icons/png/512/3100/3100988.png'},
        {minute: 45+ ' min', event: ' Remate y Goool de Luis Suarez', image: 'https://image.flaticon.com/icons/png/512/861/861512.png'},
        {minute: 60+ ' min', event: ' Gran atajada x parte de Oblak', image: 'https://image.flaticon.com/icons/png/512/1654/1654404.png'},
        {minute: 82+ ' min', event: ' Goool de tiro libre x parte de Lukaku', image: 'https://image.flaticon.com/icons/png/512/2726/2726007.png'},
        {minute: 82+ ' min', event: ' Fuera de Juego, Gol Anulado del Atletico', image: 'https://image.flaticon.com/icons/png/512/2817/2817725.png'},
        {minute: 90+ ' min', event: ' Y esto termina en un Empate', image: 'https://image.flaticon.com/icons/png/512/1505/1505471.png'}
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
