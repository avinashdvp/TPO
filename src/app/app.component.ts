import { Component, OnInit, ViewChild } from '@angular/core';
import { Details } from './details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

opened=false;
  public today=new Date();
  public time= new Date().getTime;

}