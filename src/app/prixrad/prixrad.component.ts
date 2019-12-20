import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prixrad',
  templateUrl: './prixrad.component.html',
  styleUrls: ['./prixrad.component.css']
})
export class PrixradComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  price(valeur){
  
    if (valeur <= 765) 
    {
        console.log('1750 DT');
        document.getElementById("demo").innerHTML = "182.054 DT";
    
    } 
    else if ((756 < valeur) && (valeur <= 1260))
    {
        console.log('1850 DT'); //This will be executed
        document.getElementById("demo").innerHTML = "302.757 DT";
    
    }
    else if  ((1260 < valeur) && (valeur <=1764))
    {
        console.log('2700 DT');
        document.getElementById("demo").innerHTML = "432.459 DT";
    
    }
    else if  ((1764 < valeur) && (valeur <=1890))
    {
        console.log('3650 DT');
        document.getElementById("demo").innerHTML = "462.635 DT";
    
    }
    }
}
