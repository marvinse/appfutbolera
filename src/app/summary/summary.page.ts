import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  matchId;
  match;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private matchesService: MatchesService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.matchId = params['id'];
      this.match = this.matchesService.getMatch(this.matchId);
    });
  }

  async  alertConfirmation(){
    const alert = await this.alertController.create({
      header: 'Seguro que quieres borrar el partido?',
      message: 'Si lo borras perderás tambien los datos asociados a este partido',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Okay',
          handler: () => {
            this.matchesService.deleteMatch(this.matchId);
            this.router.navigateByUrl('/')
          }
        }
      ]
    });

    await alert.present();
  }

}
