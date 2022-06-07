import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RaiService } from 'src/app/services/rai.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id!: number;
  post :any =[];
  todayNumber: number = Date.now();
    constructor( public rai : RaiService ,
    private route: ActivatedRoute,
    private router: Router,
    public datepipe: DatePipe) { }
    Gethome1()
    {
        this.router.navigate(['rai']);
    }
    
  
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['RaiId'];
    console.log("Message concernant id",this.id)
    this.rai.find(this.id).subscribe((data: any)=>{
      this.post = data;
      console.log("Message concernant view",this.post);
    });
  }

}