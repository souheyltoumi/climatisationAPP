import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chauf',
  templateUrl: './chauf.component.html',
  styleUrls: ['./chauf.component.css']
})
export class ChaufComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate1(){

    this.router.navigateByUrl('/chauf/planche');

}
navigate2(){

  this.router.navigateByUrl('/chauf/radiateur');

}

}
