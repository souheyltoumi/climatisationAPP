import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prixplan',
  templateUrl: './prixplan.component.html',
  styleUrls: ['./prixplan.component.css']
})
export class PrixplanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  price(valeur){
    valeur=valeur*55.55;
    document.getElementById("demo").innerHTML = valeur.toString();

  }

}
