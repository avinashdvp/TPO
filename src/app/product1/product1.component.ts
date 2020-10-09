import { Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Axis from 'd3';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import * as Highcharts from 'highcharts';
import { Details } from '../details';
import { ForcastServiceService } from '../forcast-service.service';
import { ForcastValues } from '../ForcastValues';
import { Forcasting } from '../Forcasting';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {


  ngOnInit(): void {
  }
  n;
  week;
  maxdate;
  j;
  display;
  l;
  forcastDate;
  newforcast: any[] = [];
  test: any[] = [];
  header = false;
  public title = 'Line Chart';
  public today = new Date();
  public time = new Date().getTime;
  LocationValue;
  ProductValue;
  forcastvalues: any[];
  userforms = new Details();
  csvRecords: any[] = [];
  jsondata;
  jsonObj: any[] = [];
  jsonObj2: any[] = [];
  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  n4 = [];
  n5 = [];
  tempdata;
  private svg: any;
  n2: any[];
  testing;
  temp2;
  temp3;
  private line: d3Shape.Line<[number, number]>; // this is line defination
  private line2: d3Shape.Line<[number, number]>;
  constructor(private forcast: ForcastServiceService, private ngxCsvParser: NgxCsvParser) {
    this.width = 1300 - this.margin.left - this.margin.right;
    this.height = 600 - this.margin.top - this.margin.bottom;
  }


  onSubmit() {
    var d = new Details();
    d.data = Number(this.week);
    d.product = this.ProductValue[0];
    d.location = this.LocationValue[0];
    this.jsonObj = this.tempdata;
    this.jsonObj2 = this.tempdata;
    this.jsonObj = this.jsonObj.filter((f) => { return f.LocatHierachyNode == this.LocationValue && f.productcatogery == this.ProductValue });
    this.jsonObj2 = this.jsonObj2.filter((f) => { return f.LocatHierachyNode == this.LocationValue && f.productcatogery == this.ProductValue });
    this.forcast.enroll(d).subscribe(data => {
      console.log(data, "test")
      console.log(data[1], "test32");
      var temp1 = data[0];
      this.temp2 = data[1];
      this.temp3 = data[2];
      this.l = data.length;
      this.newforcast.push(this.jsonObj[this.jsonObj.length - 1]);
      for (this.j = 0, this.week = 1; this.j < data[1].length; this.j++) {
        let temparray;
        var forcast2 = new ForcastValues();
        var forcasting = new Forcasting();
        forcasting.TotFactoredVolume = Math.round(temp1[this.j]).toString();
        forcast2.TotFactoredVolume = Math.round(temp1[this.j]).toString();
        var testDate = new Date("12-30-2019");
        var weekInMilliseconds = (7 * 24 * 60 * 60 * 1000) * this.week;

        testDate.setTime(testDate.getTime() + weekInMilliseconds);
        let d5 = testDate;

        console.log(d5, "d5date")
        const monthNames = ["Jan", "Feb", "March", "Apr", "May", "June",
          "July", "Aug", "Sep", "Oct", "Nov", "December"
        ];
        var maxds: string = d5.getFullYear() + "-" + (monthNames[d5.getMonth()]) + "-" + d5.getDate();
        console.log(testDate, "date")
        forcast2.date = maxds;
        forcasting.date = maxds;

        this.newforcast.push(JSON.parse(JSON.stringify(forcasting)));
        this.jsonObj.push(JSON.parse(JSON.stringify(forcasting)));
        this.week++;
      }

      console.log(this.forcast.getDetails(), "getDetails")
      this.barChartPopulation();

    }, error => console.log('e', error));

  }




  @ViewChild('fileImportInput') fileImportInput: any;

  fileChangeListener($event: any): void {

    const files = $event.srcElement.files;
    this.header = (this.header as unknown as string) === 'true' || this.header === true;

    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
        console.log('Result', result);
        // this.csvRecords = result;
        this.arrayToJSONObject(result);
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });

  }

  arrayToJSONObject(csvRecords) {
    //header
    var keys = csvRecords[0];

    //vacate keys from main array
    var newArr = csvRecords.slice(1, csvRecords.length);

    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++)
        o[cols[j]] = d[j];
      formatted.push(o);

    }

    this.jsondata = JSON.stringify(formatted);
    console.log(data, "test")
    this.jsonObj = JSON.parse(this.jsondata);
    this.tempdata = this.jsonObj;
    this.jsonObj2 = JSON.parse(this.jsondata);
    this.jsonObj.splice(0, this.jsonObj.length - this.n);
    this.jsonObj2.splice(0, this.jsonObj.length - this.n);
    console.log(this.jsonObj, "datatest");
    console.log(this.jsonObj, "datatest");
    console.log(this.forcast.getLocation(), "datatest2");
  }



  barChartPopulation() {
    var d = [];
    for (var i = 0; i < this.jsonObj.length; i++) {
      d.push(Number(this.jsonObj[i].TotFactoredVolume))

    }

    var n5 = []
    var maxd = new Date(this.jsonObj[this.jsonObj.length - 1].date)
    var maxds: string = maxd.getFullYear() + "-" + (maxd.getMonth() + 1) + "-" + maxd.getDate();
    for (var i = 0; i < this.jsonObj.length; i++) {
      n5.push(new Date(this.jsonObj[i].date))
    }

    console.log(Date.UTC(2017, 0), "kg2")

    Highcharts.chart('barChart', {
      chart: {
        type: 'line'
      },

      title: {
        text: ''
      },
      xAxis: {
        categories: n5,
        type: 'datetime',
        plotLines: [{
          color: "blue",
          width: 2,
          value: this.jsonObj2.length - 1
        }],

      },

      tooltip: {
        valueSuffix: ''
      },


      series: [{
        type: undefined,
        name: 'data',
        //  pointStart: Date.UTC(2016, 11,0,0,0),
        //  pointIntervalUnit: 'year',
        data: d,
        zoneAxis: 'x',
        zones: [{
          value: this.jsonObj2.length - 1,
          color: "orange"
        },
        {

          value: this.jsonObj.length - 1,
          color: "gray"
        }


        ]
      },
      {
        type: undefined,
        name: 'yhat lower',
        pointStart: this.jsonObj2.length - 1,
        //  pointIntervalUnit: 'year',
        data: this.temp2,
        zoneAxis: 'x',
        color: 'green'
      },
      {
        type: undefined,
        name: 'yhat upper',
        pointStart: this.jsonObj2.length - 1,
        //  pointIntervalUnit: 'year',
        data: this.temp3,
        zoneAxis: 'x',
        color: 'red'
      }


      ],

    });
  }

}