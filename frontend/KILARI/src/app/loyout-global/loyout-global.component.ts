import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-loyout-global',
  templateUrl: './loyout-global.component.html',
  styleUrls: ['./loyout-global.component.scss']
})
export class LoyoutGlobalComponent implements OnInit {

  ListTickOcean:any;

  constructor(private ApiService:ApiService , ) { }

  ngOnInit() {
    this.getNumbTicket();
  }


  getNumbTicket(){
    let endPoint = "tocticket"
      this.ApiService.get(endPoint).subscribe(
        (response:any) => {
          this.ListTickOcean = response;
          console.log('ListTickOcean', this.ListTickOcean);
        },
        (error:any) => {
          console.log('error',error);
        }
      );
  }

}
