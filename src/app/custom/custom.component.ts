import { Component, AfterViewInit, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  selectedCategory: string;

  childre=[ 
    {    "parentName": "Parent One","propertyName": "Property One" },
    {    "parentName": "Parent One","propertyName": "Property One" },
    {    "parentName": "Parent One","propertyName": "Property One" },
    {    "parentName": "Parent One","propertyName": "Property One" },
    {   "parentName": "Parent One", "propertyName": "Property Two" },
  {      "parentName": "Parent Two","propertyName": "Property Three" },
  {       "parentName": "Parent Two","propertyName": "Property Four" },
  {       "parentName": "Parent Two","propertyName": "Property Four" },
  {       "parentName": "Parent Two","propertyName": "Property Four" },
  {       "parentName": "Parent Two","propertyName": "Property Four" },
  {       "parentName": "Parent Two","propertyName": "Property Four" },
  {       "parentName": "Parent Two","propertyName": "Property Five" }, 
  {       "parentName": "Parent Three","propertyName": "Property Six" },
  {       "parentName": "Parent Three","propertyName": "Property Six" },
  {       "parentName": "Parent Three","propertyName": "Property Six" },
  {       "parentName": "Parent Three","propertyName": "Property Six" },
  {       "parentName": "Parent Three","propertyName": "Property Six" },
  {       "parentName": "Parent Three","propertyName": "Property Five" },]
  paren=[ {    "parentName": "Parent One","propertyName": "Property One" },
  {    "parentName": "Parent One","propertyName": "Property One" },
  {    "parentName": "Parent One","propertyName": "Property One" },
  {    "parentName": "Parent One","propertyName": "Property One" },
  {   "parentName": "Parent One", "propertyName": "Property Two" }]
  
  data: any =
  [
    {
      "parentName": "Parent One",
      "childProperties":
        [
          { "propertyName": "Property One" },
          { "propertyName": "Property Two" }
        ]
    },
    {
      "parentName": "Parent Two",
      "childProperties":
        [
          { "propertyName": "Property Three" },
          { "propertyName": "Property Four" },
          { "propertyName": "Property Five" },
        ]
    },
    {
      "parentName": "Parent Three",
      "childProperties":
        [
          { "propertyName": "Property Six" },
          { "propertyName": "Property Seven" },
          { "propertyName": "Property Eight" },
        ]
    }
  ]
  constructor() { }
  ngOnInit() {
  }
  getMarketplaceItems(items){
    return items.filter(item => item.parentName === this.selectedCategory);

  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  toggleAccordian(event, index) {
    var elem = document.getElementById(index.toString()) ;

    this.selectedCategory=this.data[index].parentName
    var i=0
    for(i=0;i<this.data.length;i++){
      if (i!=index){
        var elem=document.getElementById(i.toString())
        
        elem.style.maxHeight = null;

        elem.classList.toggle('hide')

      }
    }
    console.log(this.data[index])
    var element = event.target;
    
    element.classList.toggle("active");
    if(this.data[index].isActive) {
      this.data[index].isActive = false;
    } else {
      this.data[index].isActive = true;
    }   
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  openFile(event) {
    this.paren=[]
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
        let reader = new FileReader();
        reader.onload = () => {
            // this 'text' is the content of the file
            var text = reader.result;
            for (const line of text.toString().split(/[\r\n]+/)){
              console.log(line);
              var object=  {   "parentName": "Parent One", "propertyName": line}
              this.paren.push(object);

              
            }
        }
        reader.readAsText(input.files[index]);
    };
}
 
}
