import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-loyout-global',
  templateUrl: './loyout-global.component.html',
  styleUrls: ['./loyout-global.component.scss']
})
export class LoyoutGlobalComponent implements OnInit {

  ListTickOcean:any =[];
  ListBQT:any = [];
  userConnecter:any={};

  constructor(private ApiService:ApiService ,private userService: UserService ) { }

  ngOnInit() {
    this.getNumbTicket();
    this.getAllBQT();
    this.userConnecter = this.userService.getUserSession()
  }

  logout(){
    this.userService.logout()
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

  getAllBQT(){
    let endPoint = "bqt"
    this.ApiService.get(endPoint).subscribe(
      (response:any) => {
        this.ListBQT = response;
        console.log('ListBQT', this.ListBQT);
      },
      (error:any) => {
        console.log('error',error);
      }
    );
  }

}
