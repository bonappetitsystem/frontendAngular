import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  chartData = {

    type: 'LineChart',

    data: [

    ["Jan",  500, 600],

    ["Feb",  800, 900],

    ["Mar",  400, 600],

    ["Apr",  600, 500],

    ["May",  400, 300],

    ["Jun",  750, 700],

    ["Jul",  800, 710],

    ["Aug",  810, 720],

    ["Sep",  820, 730],

    ["Oct",  900, 840],

    ["Nov",  910, 850],

    ["Dec",  920, 890]

 ],

 columnNames: ["Month", "Apple", "Mi"],

 options: {

 hAxis: {

       title: 'Month'

    },

    vAxis:{

       title: 'Sell'

    },

 },

 width: 1000,

 height: 400

};
  constructor() { }

  ngOnInit(): void {
  }

}
