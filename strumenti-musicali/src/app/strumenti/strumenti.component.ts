import { Component } from '@angular/core';
import { Strumento } from '../models/strumentiMusicali.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strumenti',
  templateUrl: './strumenti.component.html',
  styleUrls: ['./strumenti.component.css']
})
export class StrumentiComponent {
  strumenti: Strumento[];

  constructor(private router:Router){
    this.strumenti = this.router.getCurrentNavigation().extras.state as Strumento[];
  }
}
