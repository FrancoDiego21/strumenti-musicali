import { Component, OnInit } from '@angular/core';
import { Spartito } from '../models/strumentiMusicali.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spartiti',
  templateUrl: './spartiti.component.html',
  styleUrls: ['./spartiti.component.css']
})
export class SpartitiComponent {
  spartiti: Spartito[];

  constructor(private router:Router){
   this.spartiti = this.router.getCurrentNavigation().extras.state as Spartito[];
  }
}
