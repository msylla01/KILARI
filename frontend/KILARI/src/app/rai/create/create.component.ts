import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { last } from 'rxjs';
import { Tocprobleme } from 'src/app/model/rai';
import { Toc } from 'src/app/model/toc';
import { RaiService } from 'src/app/services/rai.service';
import { TocService } from 'src/app/services/toc.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  diseable!: boolean;
  dis : any
  Idtoc!: number;
  Idtopro!: number;
  Idrai!: number;
  IdTocN !: number;
  form0!: FormGroup;
  form!: FormGroup;
  form1!: FormGroup;
  form2!: FormGroup;
  data!: Tocprobleme;
  tocs : any = []
  dt : any = []
  tocs1 : any = []
  dt1 : any = []
  tocn: any =[];
  dtn: any;
  num : string | undefined
  constructor( private router: Router,
    public tocservice : TocService,public raiservice : RaiService,
    private fb: FormBuilder) {
     
     }
     ngOnInit(): void {

      this.form0 = new FormGroup({
      Numero: new FormControl(),
      });
      this.form = new FormGroup({
      Numero: new FormControl(),
      priorite: new FormControl(),
      pays: new FormControl(),
      Datedebut: new FormControl(),
      heurD: new FormControl('12:00' , Validators.required),
      Datefin: new FormControl(),
      heurF: new FormControl('12:00' , Validators.required),
      Description: new FormControl(),
      SerPlat: new FormControl(),
      toctik: new FormControl(),
     
      
      

        
      
      });

      this.form1 = new FormGroup({
       
        Numerotocpro: new FormControl(),
        typeproblem: new FormControl(),
        Porteur: new FormControl(),
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
       
    /**
     * Write code on Method
     *
     * @return response()
     */
    get f(){
      return this.form.controls;
    }
       generatenumber(){
         return Math.floor((Math.random() * 1000000) + 1 +(12345 - 347) + Math.random() - (Math.random() +12))
       }
    
    /**
     * Write code on Method
     *
     * @return response()
     */
    submit(){
      /*this.Idtoc = this.generatenumber()
      this.form.value.ToId = this.Idtoc*/
      this.form0.value.Numero= this.form.value.Numero
      console.log('form0',this.form0.value);
    this.tocservice.createTocN(this.form0.value).subscribe((res:any) => {
      console.log(' created successfully!');
       this.tocservice.getAllTick().subscribe((data: any)=>{
            
            this.tocn = JSON.stringify(data);
            this.dtn = JSON.parse(this.tocn)
            let last:any = this.dtn[this.dtn.length-1]
            this.IdTocN =last.id
            console.log("Message id tocN",this.IdTocN);

          this.form.value.toctik = this.IdTocN
           console.log('form resul',this.form.value);
     
          this.tocservice.create(this.form.value).subscribe((res:any) => {
          console.log('stp1 created successfully!');
          this.raiservice.getAll().subscribe((data: any)=>{
            this.tocs = JSON.stringify(data);
            this.dt = JSON.parse(this.tocs)
            let last:any = this.dt[this.dt.length-1]
            this.Idtoc =last.id
            console.log("Message id toc",last.id);
              })  
            })
          })  
          
        })

      
      /**/
        
        this.dis=2
   

    
    }

    submit2(){

     /* this.Idtopro = this.generatenumber()
      this.form1.value.TocproblemeId = this.Idtopro
      this.form1.value.Toc = this.Idtoc*/

      
      this.form1.value.toc = Number(this.Idtoc)
      console.log('form2',this.form1.value,'id toc', this.Idtoc);

    this.raiservice.createtocpro(this.form1.value).subscribe((res:any) => {
        console.log('stp2 created successfully!');
        this.ngOnInit()
        this.raiservice.getAllTocpro().subscribe((data: any)=>{
        this.tocs1 = JSON.stringify(data);
        this.dt1 = JSON.parse(this.tocs1)
        let last1:any = this.dt1[this.dt1.length-1]
        this.Idtopro =last1.id
          console.log("Message concernant rai",this.Idtopro);
        })  
        this.dis=3
   })
    

   
    }

    submit3(){
    /*  this.Idrai = this.generatenumber()
      this.form2.value.RaiId = this.Idrai
      this.form2.value.Tocprobleme = this.Idtopro*/
       this.form2.value.tocprobleme = Number(this.Idtopro)
      console.log('form3',this.form2.value);

   this.raiservice.create(this.form2.value).subscribe((res:any) => {
        console.log('stp3 created successfully!');
        this.router.navigateByUrl('plan/create');
   })
    

    }
}
