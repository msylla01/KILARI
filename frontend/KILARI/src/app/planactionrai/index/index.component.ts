import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rai, Tocprobleme } from 'src/app/model/rai';
import { PlanactionraiService } from 'src/app/services/planactionrai.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  searchTerm: any 
  plan : any
  dt : any = []
  constructor(public planservice : PlanactionraiService, private router : Router) { }

  Gethome()
  {
      this.router.navigate(['plan']);
  }
  Gethome1()
  {
      this.router.navigate(['plan/create']);
  }

  ngOnInit(): void {

    this.planservice.getAll().subscribe((data: any)=>{
      this.plan = JSON.stringify(data);
      this.dt = JSON.parse(this.plan)
      let last:any = this.dt
       
      console.log("Message id toc",last[0]);
    })
     
  }


  search(value: string): void {
        this.plan = this.plan.filter((val: any) => val.name.toLowerCase().includes(value));
      }
}
/**ngFor="let t1 of toc.incident[0].planrai"
<table class="table table-striped table-advance table-hover">
                              <thead>
                                <tr>
                                  <th><i ></i> TOC</th>
                                  
                                  <th ><i ></i> Nature I</th>
                                  <th><i ></i> Libellé</th>
                                  <th><i></i> Porteur</th>
                                  <th><i ></i> Périmètre</th>
                                  <th><i ></i>Date Prev</th>
                                  <th><i ></i>DAte R</th>
                                  <th><i ></i>Status</th>
                                  <th></th>
                                </tr>

                              </thead>
                              <tbody>
                                <tr *ngFor="let toc of dt | filterplan: searchTerm : 'Numerotocpro' ">
                                  <td>{{ toc.Numerotocpro }}</td>
                                  <td>{{ toc.incident[0].NatureIncident}}</td>
                                  <td >{{ "t1.Libelle "}}</td>
                                  <td  >{{ "t1.Porteur "}}</td>
                                  <td  >{{ "t1.Porteur"}}</td>
                                  <td  >{{ "t1.Porteur"}}</td>
                                  <td  >{{ "t1.Porteur"}}</td>
                                  <td  >{{ "t1.Porteur"}}</td>
                                
                                  <td>
                                    <button  [routerLink]="['/plan/', toc.id, 'view']" class="btn btn-success btn-xs" ><i class="fa fa-check"></i></button>
                                    <button [routerLink]="['/plan/', toc.id, 'edit']"class="btn btn-primary btn-xs"><i class="fa fa-pencil"></i></button>
                                    <!--<button class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button>-->
                                  </td>
                                </tr>                            
                              </tbody>
                            </table>
                            */

    
/**  tableau in taleau
 * <table class="table table-hover table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col">Tag Type</th>
      <th scope="col">Tags</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <ng-container *ngFor="let tag of data; let i = index">
      <tr *ngFor="let el of tag.tags; let i2=index">

        <td *ngIf="i2==0"> {{tag.id}} </td>
        <td *ngIf="i2!=0"> </td>
        <td> {{el}} </td>
        <td>
          <div align="center">
            <a matTooltip="edit tag"><i>mode_edit</i></a>
          </div>
        </td>
      </tr>
    </ng-container>

  </tbody>
</table>

 */


 