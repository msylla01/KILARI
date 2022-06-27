import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SpinnerService } from '../../services/Spinner.service'
import { ApiService } from '../../services/api.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-plan-rai',
  templateUrl: './plan-rai.component.html',
  styleUrls: ['./plan-rai.component.scss']
})
export class PlanRaiComponent implements OnInit {

  dis : any
  modalRef: NgbModalRef | any;
  form!: FormGroup;
  form1!: FormGroup;
  form2!: FormGroup;
  PasForm: FormGroup;
  ListIncident:any= [];
  ListTocProbleme:any= [];
  Idtopro!: number;
  disableBtn:boolean = true;
  Numerotocpro:any;
  Idinc! : number

  objet : any
  dt : any = []


  constructor(private SpinnerService:SpinnerService,private toastr: ToastrService,private router: Router,private ApiService:ApiService ,private modalService: NgbModal,
    private fb: FormBuilder) {

    this.PasForm = this.fb.group({
      pas: this.fb.array([]) ,
    });
   }

   showSuccess(msg:any) {
    this.toastr.success(msg);
  }

  showDanger(msg:any){
    this.toastr.error(msg);
  }


  ngOnInit() {
  this.Numerotocpro = JSON.parse(localStorage.getItem('Numerotocpro') || '{}');
    console.log('visigelForm',this.visigelForm);
    this.getIncident();
    this.getTocProbleme();

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
      pas: this.fb.array([])
      });


      this.form1 = new FormGroup({
        NatureIncident: new FormControl(),
        tocprobleme: new FormControl(),
      });

       this.dis = 2

  }

  deleStorageAndClose(){
    this.modalRef.dismiss( 'Close click') ;
    // this.PasForm.reset();
    this.pas.clear()
  }

  open(content:any, plan_rai?:any) {

    console.log('item', plan_rai);
    if (!plan_rai) {
      this.PasForm.reset();
    }
    this.addPas()

    // this.form.patchValue({
    //   Libelle: plan_rai.Libelle,
    //   Porteur: plan_rai.planrai.Porteur,
    //   Dateprevisionel: plan_rai.planrai.Dateprevisionel,
    //   Dateeffective: plan_rai.Dateeffective,
    //   Perimetre: plan_rai.Perimetre,
    //   Status: plan_rai.Status,
    //   Efficacite: plan_rai.Efficacite,
    //   Commentaire: plan_rai.Commentaire,
    //   tocpr: plan_rai.Numerotocpro
    //  });


    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });
  }

  openEdit(content:any, item?:any) {

    console.log('item', item);
    if (!item) {
      this.PasForm.reset();
    }
   // this.addPas()

    // this.form.patchValue({
    //   Libelle: item.Libelle,
    //   Porteur: item.planrai.Porteur,
    //   Dateprevisionel: item.planrai.Dateprevisionel,
    //   Dateeffective: item.Dateeffective,
    //   Perimetre: item.Perimetre,
    //   Status: item.Status,
    //   Efficacite: item.Efficacite,
    //   Commentaire: item.Commentaire,
    //   tocpr: item.Numerotocpro
    //  });


    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });

    console.log(' item.planrai', item.planrai);

    item.planrai.forEach((t:any) => {
      var rai: FormGroup = this.PasForm;
      this.pas.push(rai);
      rai.patchValue(t)
    });

    this.form.patchValue(item);
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

  get visigelForm(){
    return this.PasForm.valid;
  }

  addPas() {
    this.disableBtn =  false;
    console.log('newPa',this.PasForm);
    console.log('visigelForm',this.visigelForm);
    console.log('this.fb.array([]).length',this.fb.array([]).length);

    this.pas.push(this.newPa());
  }

  removePas(i:number) {
    this.pas.removeAt(i);
  }





     get f(){
      return this.form1.controls;
    }



    getIncident(){
      let endPoint = "incident"
      this.ApiService.get(endPoint).subscribe(
        (response:any) => {
          this.ListIncident = response;
          console.log('ListIncident', this.ListIncident);
        },
        (error:any) => {
          console.log('error',error);
        }
      );
    }

    getTocProbleme(){
      let endPoint = "tocprobleme";
      this.SpinnerService.showSpinner();
      this.ApiService.get(endPoint).subscribe(
        (response:any) => {
          this.ListTocProbleme = response;
          this.dt = this.ListTocProbleme
          let last:any = this.ListTocProbleme[this.ListTocProbleme.length-1]
          this.Idinc =last.id
          this.SpinnerService.hideSpinner();
          console.log('ListTocProbleme', this.ListTocProbleme);
        },
        (error:any) => {
          console.log('error',error);
          this.SpinnerService.hideSpinner();
        }
      );
    }

    onSubmit() {
      let endPoint =  'planaction';
      console.log(this.PasForm.value,'he',this.form.value);
      this.objet = this.PasForm.value;
      for(let i=0; i<this.pas.value.length; i++){
        // if (condition) {

        // }
          this.pas.value[i].Status= Number(this.pas.value[i].Status)
          this.pas.value[i].tocpr= Number(this.pas.value[i].tocpr)
          console.log('planaction  objet :',this.pas.value[i]);
          this.ApiService.post(endPoint,this.pas.value[i]).subscribe(
            (res:any) => {
              console.log('res planification====>',res);
            this.showSuccess('La création bine effectué')
            this.getTocProbleme()
            this.deleStorageAndClose();
            console.log('planaction  objet :',i,'created successfully!',);
            }),
            (error: any) => {
              this.showDanger('La création a échouée')
            }
          }
      }

}
