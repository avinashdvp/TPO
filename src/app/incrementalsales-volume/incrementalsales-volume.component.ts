import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { Details } from '../details';
import { ForcastServiceService } from '../forcast-service.service';


@Component({
  selector: 'app-incrementalsales-volume',
  templateUrl: './incrementalsales-volume.component.html',
  styleUrls: ['./incrementalsales-volume.component.css']
})
export class IncrementalsalesVolumeComponent implements OnInit {
  public today=new Date();
 time;
  ProductValue=[];
  LocationValue: any;
  tempdata: any;
  jsonObj: any;
  jsonObj2: any;
  temp2: any;
  l: any;
  userforms=new Details();
  newforcast: any;
  week: number;
  j: any;
  header: boolean;
  jsondata: string;
  n: any;
  startdate;
  enddate;
totalsales=0;
basevolume=0;
incrementalsales=0;
lift=0;
tfv=0;
productsarray:any[]=[];
uniqueproductsarray:any[]=[];
  constructor(private forcast:ForcastServiceService,private ngxCsvParser: NgxCsvParser) { }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
   }, 1000);
  }

  onSubmit()
  {

for(var i=0 ;i <= this.ProductValue.length-1;i++){
  this.totalsales=0;
  this.basevolume=0;
  this.incrementalsales=0;
  this.lift=0;
  this.tfv=0;
    var d= new Details();
    d.data=Number(this.week);
    d.product=this.ProductValue[i];
    console.log(this.ProductValue[i],"check1")
    d.location =this.LocationValue[0];

    this.jsonObj=this.tempdata;
    // this.jsonObj2=this.tempdata;
    // console.log(this.tempdata,"check3");
  //   this.jsonObj.filter((f)=>{this.productsarray.push(f.productcatogery)});
  //   console.log(this.productsarray,"productsarray");
  //   this.productsarray.forEach((c) => {
  //     if (!this.uniqueproductsarray.includes(c)) {
  //         this.uniqueproductsarray.push(c);
  //     }
  // });
  // console.log(this.uniqueproductsarray,"uparray");

 this.jsonObj=this.jsonObj.filter((f)=>{return f.LocatHierachyNode == this.LocationValue && f.productcatogery == this.ProductValue[i]});
 console.log(this.jsonObj,"check2");
 this.jsonObj2=this.jsonObj.filter((f)=>{return f.LocatHierachyNode == this.LocationValue && f.productcatogery == this.ProductValue[i]});//&& f.productcatogery =="100 ML Butterscotch"
 this.jsonObj=this.jsonObj.filter((f)=>{return new Date(f.date)>= new Date(this.startdate) && new Date(f.date)<=new Date(this.enddate) });
//  console.log(this.jsonObj,"check")
 this.jsonObj.filter((f)=>{ console.log(f.date2);this.totalsales = this.totalsales+ Number(Number(f.date2).toFixed(2))});
 this.jsonObj.filter((f)=>{ console.log(f.SeasonalVolume);this.basevolume = this.basevolume+ Number(Number(f.SeasonalVolume).toFixed(2))});
 this.jsonObj.filter((f)=>{ console.log(f.TotFactoredVolume);this.tfv = this.tfv+ Number(Number(f.TotFactoredVolume).toFixed(2))});

this.incrementalsales=this.totalsales-this.basevolume;
this.lift=this.incrementalsales/this.basevolume;
console.log(this.incrementalsales,"insales")
 console.log(this.tfv,"totfacvol");
 console.log(this.basevolume,"basevol");

 console.log(this.lift,"totsales");
 console.log(this.jsonObj,"dates");
 this.barChart(this.ProductValue[i]);
  
  }}



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
arrayToJSONObject (csvRecords){
  //header
  var keys = csvRecords[0];

  //vacate keys from main array
  var newArr = csvRecords.slice(1, csvRecords.length);

  var formatted = [],
  data = newArr,
  cols = keys,
  l = cols.length;
  for (var i=0; i<data.length; i++) {
          var d = data[i],
                  o = {};
          for (var j=0; j<l; j++)
                  o[cols[j]] = d[j];
          formatted.push(o);
        
  }
 
//  this.location=this.forcast.getLocation();
  this.jsondata=JSON.stringify(formatted);
  console.log(data,"test") 
  this.jsonObj = JSON.parse(this.jsondata);
  this.tempdata=this.jsonObj;
  // this.jsonObj=this.jsonObj.filter((f)=>{f.Loacation =="Banjara hills"})
  this.jsonObj2=JSON.parse(this.jsondata);
 this.jsonObj.splice(0,this.jsonObj.length-this.n);
 this.jsonObj2.splice(0,this.jsonObj.length-this.n);
 console.log(this.jsonObj,"datatest");
 console.log(this.jsonObj,"datatest");
 console.log(this.forcast.getLocation(),"datatest2");

}
barChart(pro) {
 Highcharts.chart(pro, {
   chart: {
    type: 'column'
   },
   
   title: {
     text: ''
   },
   xAxis: {
    categories: ['Total Volume', 'Basic Decomposition', '']
  
},
yAxis: {
  allowDecimals: false,
  min: 0,
  title: {
      text: ''
  }
},

plotOptions: {
  column: {
      stacking: 'normal'
  }
},
   tooltip: {
     valueSuffix: ''
   },
   series: [{
    name: 'Total Factored Volume',
    type: undefined,
    data: [this.tfv,0,0],
    color:'red'
}, {
  name:'Incremental Sales',
  type: undefined,
  data: [0,this.incrementalsales,0],
   
    color:'green'

}, 
{
  name:'Base Decomposition',
  type: undefined,
  data: [0,this.basevolume,0],
    color:'blue'
}
]
   
   
  
 });
 Highcharts.chart((pro +1), {
  chart: {
   type: 'column'
  },
  
  title: {
    text: ''
  },
  xAxis: {
   categories: ['Lift']
 
},
yAxis: {
 allowDecimals: false,
 min: 0,
 title: {
     text: ''
 }
},

plotOptions: {
 column: {
     stacking: 'normal'
 }
},
  tooltip: {
    valueSuffix: ''
  },
  series: [{
   name: 'Lift (from promotion)',
   type: undefined,
   data: [this.lift],
   color:'brown'
}
]
  
  
 
});
}
}
