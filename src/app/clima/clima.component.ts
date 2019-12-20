import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate1(){

    this.router.navigateByUrl('/clim/cassette');

}
navigate2(){

  this.router.navigateByUrl('/clim/console');

}
navigate3(){

  this.router.navigateByUrl('/clim/murale');

}
navigate4(){

this.router.navigateByUrl('/clim/mobile');

}

}
