import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prixclim',
  templateUrl: './prixclim.component.html',
  styleUrls: ['./prixclim.component.css']
})
export class PrixclimComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
price(valeur){
  
if (valeur <= 2637.64) 
{
    console.log('1750 DT');
    document.getElementById("demo").innerHTML = "1750 DT";

} 
else if ((2637.64 < valeur) && (valeur <= 3516.85))
{
    console.log('1850 DT'); //This will be executed
    document.getElementById("demo").innerHTML = "1850 DT";

}
else if  ((3516.85 < valeur) && (valeur <=5275.28))
{
    console.log('2700 DT');
    document.getElementById("demo").innerHTML = "2700 DT";

}
else if  ((5275.28 < valeur) && (valeur <=7033.70))
{
    console.log('3650 DT');
    document.getElementById("demo").innerHTML = "3650 DT";

}
}
}
