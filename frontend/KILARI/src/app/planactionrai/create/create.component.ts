import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Tocprobleme } from 'src/app/model/rai';
import { PlanactionraiService } from 'src/app/services/planactionrai.service';
import { RaiService } from 'src/app/services/rai.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  [x: string]: any;
  diseable!: boolean;
  dis : any
  Idtoc!: number;
  Idtopro!: number;
  objet : any
  Idrai!: number;
  Idinc! : number
  form!: FormGroup;
  form1!: FormGroup;
  form2!: FormGroup;
  PasForm: FormGroup;
  data!: Tocprobleme;
  tocs : any = []
  dt : any = []
  tocs1 : any = []
  dt1 : any = []
  constructor(private router: Router,
    public planactservice : PlanactionraiService,
    public raiservice : RaiService,
    private fb: FormBuilder) {


      this.PasForm = this.fb.group({

        pas: this.fb.array([]) ,
      });
  }

  ngOnInit(): void {

    this.raiservice.getAllTocpro().subscribe((data: any)=>{
          this.tocs = JSON.stringify(data);
          this.dt = JSON.parse(this.tocs)
          let last:any = this.dt[this.dt.length-1]
          this.Idinc =last.id
          console.log("Message id toc",this.Idinc);


        })


    this.form = new FormGroup({
      Libelle: new FormControl(),
      Porteur: new FormControl(),
      Dateprevisionel: new FormControl(),
      Dateeffective: new FormControl(),
      Perimetre: new FormControl(),
      Status: new FormControl(),
      Efficacite: new FormControl(),
      Commentaire: new FormControl(),
      tocpr: new FormControl(),


      });


      this.form1 = new FormGroup({
        NatureIncident: new FormControl(),
        tocprobleme: new FormControl(),



      });

       this.dis = 2;


  }

  get pas() : FormArray {
    return this.PasForm.get("pas") as FormArray
  }

  newPa(): FormGroup {
    return this.fb.group({
    Libelle: '',
    Porteur: '',
    Dateprevisionel: '',
    Dateeffective: '',
    Perimetre: '',
    Status: '',
    Efficacite: '',
    Commentaire: '',
    tocpr: '',
    })
  }

  addPas() {
    this.pas.push(this.newPa());
  }

  removePas(i:number) {
    this.pas.removeAt(i);
  }





     get f(){
      return this.form1.controls;
    }




    /**
     * Write code on Method
     *
     * @return response()
     */
    submit(){
      /*this.Idtoc = this.generatenumber()
      this.form.value.ToId = this.Idtoc*/
       this.form1.value.tocprobleme = Number(this.form1.value.tocprobleme)
      console.log('form',this.form1.value);
    this.planactservice.createIncident(this.form1.value).subscribe((res:any) => {
        console.log('incident created successfully!');

        this.planactservice.getAllIncident().subscribe((data: any)=>{
          this.tocs1 = JSON.stringify(data);
          this.dt1 = JSON.parse(this.tocs1)
          let last:any = this.dt1[this.dt1.length-1]
           this.Idinc =last.id
          console.log("Message id toc",last.id);
        })


   })
   this.dis =2
}





onSubmit() {
  console.log(this.PasForm.value,'he',this.form.value);
  this.objet = this.PasForm.value;
for(let i=0; i<this.pas.value.length; i++){
 //use i instead of 0
    this.pas.value[i].Status= Number(this.pas.value[i].Status)
    this.pas.value[i].tocpr= Number(this.pas.value[i].tocpr)
    console.log('planaction  objet :',this.pas.value[i]);
     this.planactservice.createPlanaction(this.pas.value[i]).subscribe((res:any) => {
      console.log('planaction  objet :',i,'created successfully!',);
      })
    }
this.router.navigateByUrl('plan/index');

}

}
