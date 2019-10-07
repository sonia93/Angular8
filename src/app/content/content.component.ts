import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 
  chart: Chart;

  constructor() { }

  ngOnInit() {
   

  }

}
