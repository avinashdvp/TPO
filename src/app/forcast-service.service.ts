import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Details } from './details';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class ForcastServiceService {
  details;
  clicked=true;
 location;
 product;
  
  constructor(private _Http:HttpClient) { }

  setDetails(data)
  {
    this.clicked=true;
   this.details=data;

  }
  getDetails()
  {
    return this.details;
  }
  enroll(details:Details)
  {
    console.log(details,"newApicheck");
return this._Http.post<any>("https://tpo-forecast.azure-api.net/prophet/score",details)
  }
  setData(csvdata){

  }
  getClicked()
  {
    return this.clicked;
  }
  setLocation(loc)
  {
    this.location=loc;

    console.log(this.location,"service")
  }
  getLocation()
  {
    return this.location;
  }
  setProduct(pro)
  {
   this.product=pro;
   console.log(this.product,"service2")
  }
  getProduct()
  {
    return this.product;
  }

}
