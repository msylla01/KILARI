import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rai, Tocprobleme } from 'src/app/model/rai';
import { Toc } from 'src/app/model/toc';
import { RaiService } from 'src/app/services/rai.service';
import { TocService } from 'src/app/services/toc.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id!: number;
  idrai!: number
  idtocpro!: number
  post!: Toc;
  post1!: Tocprobleme;
  post2!: Rai;
  form!: FormGroup;
  form1!: FormGroup;
  form2!: FormGroup;
  dis : any
  pos1: any;
  tocs : any = []
  dt : any = []
  tocs1 : any = []
  dt1 : any = []
  constructor(
     private route: ActivatedRoute,
    private router: Router,
    public raiservice: RaiService,
     public tocservice : TocService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['RaiId'];
    console.log('id',this.id)
    this.raiservice.find(this.id).subscribe((data: Toc)=>{
      this.post = data;
      this.pos1 =this.post.tocpro
      this.idtocpro =this.pos1[0].id
      this.idrai = this.pos1[0].rai[0].id
      console.log(this.post)
      console.log(this.id,this.idrai,this.idtocpro)
      
      this.raiservice.findtocpro(this.idtocpro).subscribe((data: Tocprobleme)=>{
        this.post1 = data;
        console.log(this.post1)
      }); 
      this.raiservice.findrai(this.idrai).subscribe((data: Rai)=>{
        this.post2 = data;
        console.log(this.post2)
      }); 
        console.log(this.idrai)
    }); 
    this.form = new FormGroup({
      Numerotoc: new FormControl(),
      priorite: new FormControl(),
      pays: new FormControl(),
      Datedebut: new FormControl(),
      Datefin: new FormControl(),
      Description: new FormControl(),
      SerPlat: new FormControl(),
        
      
      });

      this.form1 = new FormGroup({
       
        Numerotocpro: new FormControl(),
        typeproblem: new FormControl(),
        Porteur: new FormControl(),
        Date: new FormControl(),
        Dtatustocprob: new FormControl(),
        Priorite: new FormControl(),
        toc: new FormControl(),
          
        
        });

        this.form2 = new FormGroup({
          
          status: new FormControl(),
          Critere: new FormControl(),
          declenchement: new FormControl(),
          Rapportredige: new FormControl(),
          Rapportpartage: new FormControl(),
          Comptrendus: new FormControl(),
          Cause: new FormControl(),
          Rootcause: new FormControl(),
          Statrootcause: new FormControl(),
          Actionretablissement: new FormControl(),
          Datecritere: new FormControl(),
          Typesolution: new FormControl(),
          Commentaire: new FormControl(),
          DateRept: new FormControl(),
          Rirecu: new FormControl(),
          JoinToc: new FormControl(),
          tocprobleme: new FormControl(),
            
          
          });
    this.dis = 1
  }

  get f(){
    return this.form.controls;
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.raiservice.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         
    })

    this.raiservice.getAll().subscribe((data: any)=>{
      this.tocs = JSON.stringify(data);
      this.dt = JSON.parse(this.tocs)
      console.log("Message toc  ",this.dt);
    })
    
    this.dis=2

  }
    submit2(){
    this.form1.value.toc = Number(this.form1.value.toc)
    console.log(this.form1.value);
    this.raiservice.updatetocpro(this.idtocpro, this.form1.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.raiservice.getAllTocpro().subscribe((data: any)=>{
          this.tocs1 = JSON.stringify(data);
          this.dt1 = JSON.parse(this.tocs1)
          console.log("Message tocpro",this.dt1);
        })  
      
         this.dis=3
         
    })
    
    
    
  }
    submit3(){
    this.form2.value.tocprobleme = Number(this.form2.value.tocprobleme)
    console.log(this.form2.value);
    this.raiservice.updaterai(this.idrai, this.form2.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('rai/index');
    })

    
  }
  Home(){
     this.router.navigateByUrl('rai/index');
  }

}
