import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrumentiMusicali } from './models/strumentiMusicali.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "StrumentiMusicali"
  URL = "https://my-json-server.typicode.com/FrancoDiego21/strumentimusicali/db";
  data: StrumentiMusicali;
  oStrumentiMusicali: Observable<StrumentiMusicali>;

  constructor(public http: HttpClient){}

  ngOnInit(): void{
    this.oStrumentiMusicali = this.http.get<StrumentiMusicali>(this.URL);
    this.oStrumentiMusicali.subscribe( d => { 
      this.data = d;
      alert(this.data.spartiti.length)
    });

  }
}
