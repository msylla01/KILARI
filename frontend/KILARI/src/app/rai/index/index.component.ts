import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rai } from 'src/app/model/rai';
import { RaiService } from 'src/app/services/rai.service';
import { TocService } from 'src/app/services/toc.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    searchTerm: any 
    page = 1;
    pageSize = 4;
    collectionSize: number | undefined;
    currentRate = 8;
    filterargs = {Numerotoc: '2201K28326'}; 
    rais : Rai[] = []
    tocs : any = []
    dt : any = []
    displayedColumns: string[] = ['Numerotoc','pays','Datedebut', 'Datefin',
    'priorite','tocpro.Porteur']
    
    y : any = ['Description','tocpro.Date','tocpro.Dtatustocprob','tocpro.Numerotocpro','tocpro.Porteur','tocpro.Priorite','tocpro.typeproblem',
    'tocpro.rai.Actionretablissement','tocpro.rai.Cause','tocpro.rai.Commentaire','tocpro.rai.Comptrendus','tocpro.rai.Datecritere','tocpro.rai.Rapportpartage','tocpro.rai.Rapportredige','tocpro.rai.Rootcause'
    ,'tocpro.rai.Statrootcause','tocpro.rai.Typesolution','tocpro.rai.declenchement','tocpro.rai.status','tocpro.rai.tocprobleme'
    ]
  
    
    
      constructor(public rai : RaiService,
        public tocservice :TocService,
         private router : Router) { }
      Gethome()
      {
          this.router.navigate(['rai']);
      }
      Gethome1()
      {
          this.router.navigate(['rai/create']);
      }
      ngOnInit(): void {
        this.tocservice.getAll().subscribe((data: any)=>{
          this.tocs = JSON.stringify(data);
          this.dt = JSON.parse(this.tocs)
          this.collectionSize = this.dt.length;
          console.log("Message concernant rai",this.dt);
        })  
        
        
        
        
      }
      search(value: string): void {
        this.tocs = this.tocs.filter((val: any) => val.name.toLowerCase().includes(value));
        this.collectionSize = this.dt.length;
      }
    }