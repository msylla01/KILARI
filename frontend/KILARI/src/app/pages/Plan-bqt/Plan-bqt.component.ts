import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SpinnerService } from '../../services/Spinner.service'
import { ApiService } from '../../services/api.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Plan-bqt',
  templateUrl: './Plan-bqt.component.html',
  styleUrls: ['./Plan-bqt.component.scss']
})
export class PlanBqtComponent implements OnInit {

  disableChamp:boolean = false;
  title:any
  res:any = {};
  tilreBtn:any;
  disableBtnAdd:boolean = false
  dis : any
  modalRef: NgbModalRef | any;
  form!: FormGroup;
  form2!: FormGroup;
  PasForm: FormGroup;
  ListBQT:any= [];
  Listplanactionbqt:any = []
  disableBtn:boolean = false;
  // Numerotocpro:any;
  Idinc! : number
  IdTOc:any;
  objet : any
  dt : any = []
  updateOrCreate:boolean = false;


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
  // this.Numerotocpro = JSON.parse(localStorage.getItem('Numerotocpro') || '{}');
    console.log('visigelForm',this.visigelForm);
    // this.getIncident();
    this.getAllBQT();
    this.getplanactionbqt()

    this.form = new FormGroup({
      Libelle: new FormControl(),
      Porteur: new FormControl(),
      Dateprevisionel: new FormControl(),
      Dateeffective: new FormControl(),
      Perimetre: new FormControl(),
      Status: new FormControl(),
      Efficacite: new FormControl(),
      Commentaire: new FormControl(),
      Decision: new FormControl(),
      Situation: new FormControl(),
      bqt: new FormControl(),
      pas: this.fb.array([])

      });


      // this.form1 = new FormGroup({
      //   NatureIncident: new FormControl(),
      //   tocprobleme: new FormControl(),
      // });

       this.dis = 2

  }

  deleStorageAndClose(){
    this.modalRef.dismiss( 'Close click') ;
    // this.PasForm.reset();
    this.pas.clear()
  }

  open(content:any, plan_rai?:any) {
    this.title = "Création d'un plan d'action rai";
    this.tilreBtn =  "Enregistrer le PA"
this.updateOrCreate = false;
    console.log('item', plan_rai);
    if (!plan_rai) {
      this.PasForm.reset();
    }
    this.addPas()
    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });
  }

  openEdit(content:any, item?:any) {
    this.title = "Modification d'un plan d'action bqt";
    this.tilreBtn =  "Enregistrer le PA modifier"
    this.updateOrCreate =  true
    this.disableBtn =  true;
    this.disableBtnAdd = true
    this.IdTOc =  item.id;
    console.log('item', item,this.IdTOc);
    if (!item) {
      this.PasForm.reset();
    }
    for (let index = 0; index < item.planbqt.length; index++) {
      const element = item.planbqt[index];
      console.log('element',element);

      const res = new FormGroup({
          Libelle: new FormControl(element.Libelle),
          Porteur: new   FormControl(element.Porteur),
          Dateprevisionel: new FormControl(element.Dateprevisionel),
          Dateeffective: new FormControl(element.Dateeffective),
          Perimetre: new FormControl(element.Perimetre),
          Efficacite: new FormControl(element.Efficacite),
          Status: new FormControl(element.Status),
          Decision: new FormControl(element.Decision),
          Situation: new FormControl(element.Situation),
          Commentaire: new FormControl(element.Commentaire),
          bqt: new FormControl(element.bqt),
        });
        this.pas.push(res);
    }

    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });

  }

  openView(content:any, item?:any) {
    console.log('this.disableChamp ',this.disableChamp );

    this.title = "Modification d'un plan d'action bqt";
    this.tilreBtn =  "Enregistrer le PA modifier"
    this.updateOrCreate = true
    this.disableBtn =  true;
    this.disableBtnAdd = true
    this.IdTOc =  item.id;
    console.log('item', item,this.IdTOc);
    if (!item) {
      this.PasForm.reset();
    }
    for (let index = 0; index < item.planbqt.length; index++) {
      const element = item.planbqt[index];
      console.log('element',element);
      this.res = new FormGroup({
          Libelle: new FormControl(element.Libelle),
          Porteur: new FormControl(element.Porteur),
          Dateprevisionel: new FormControl(element.Dateprevisionel),
          Dateeffective: new FormControl(element.Dateeffective),
          Perimetre: new FormControl(element.Perimetre),
          Efficacite: new FormControl(element.Efficacite),
          Status: new FormControl(element.Status),
          Commentaire: new FormControl(element.Commentaire),
          Decision: new FormControl(element.Decision),
          Situation: new FormControl(element.Situation),
          bqt: new FormControl(element.bqt),
        });
        // this.res.disabled = true
    // this.disableChamp = true
console.log('=====>res form', this.res);

        this.pas.push(this.res);
    }

    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });

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
    Decision: '',
    Situation: '',
    Efficacite: '',
    Commentaire: '',
    bqt: '',
    })
  }

  get visigelForm(){
    return this.PasForm.valid;
  }

  addPas() {
    // this.disableBtn =  false;
    console.log('newPa',this.PasForm);
    console.log('visigelForm',this.visigelForm);
    console.log('this.fb.array([]).length',this.fb.array([]).length);

    this.pas.push(this.newPa());
  }

  removePas(i:number) {
    this.pas.removeAt(i);
  }

    //  get f(){
    //   return this.form1.controls;
    // }

    // getIncident(){
    //   let endPoint = "incident"
    //   this.ApiService.get(endPoint).subscribe(
    //     (response:any) => {
    //       this.ListIncident = response;
    //       console.log('ListIncident', this.ListIncident);
    //     },
    //     (error:any) => {
    //       console.log('error',error);
    //     }
    //   );
    // }

getplanactionbqt(){
  let endPoint = "planactionbqt";
      this.SpinnerService.showSpinner();
      this.ApiService.get(endPoint).subscribe(
        (response:any) => {
          this.Listplanactionbqt = response;
          this.dt = this.Listplanactionbqt
          let last:any = this.Listplanactionbqt[this.Listplanactionbqt.length-1]
          // this.Idinc =last.id
          this.SpinnerService.hideSpinner();
          console.log('Listplanactionbqt', this.Listplanactionbqt);
        },
        (error:any) => {
          console.log('error',error);
          this.SpinnerService.hideSpinner();
        }
      );
}
    getAllBQT(){
      let endPoint = "bqt";
      this.SpinnerService.showSpinner();
      this.ApiService.get(endPoint).subscribe(
        (response:any) => {
          this.ListBQT = response;
          this.dt = this.ListBQT
          let last:any = this.ListBQT[this.ListBQT.length-1]
          this.Idinc =last.id
          this.SpinnerService.hideSpinner();
          console.log('ListBQT', this.ListBQT);
        },
        (error:any) => {
          console.log('error',error);
          this.SpinnerService.hideSpinner();
        }
      );
    }



    submitValed(){
      if (!this.updateOrCreate) {
        this.onSubmit();
      }
      else{
        this.updatePlanAction();
      }
    }

    onSubmit() {
      let endPoint =  'planactionbqt';
      console.log('create mode',this.PasForm.value);
      this.objet = this.PasForm.value;
      for(let i=0; i<this.pas.value.length; i++){
          this.pas.value[i].Status= Number(this.pas.value[i].Status)
          this.pas.value[i].bqt= Number(this.pas.value[i].bqt)
          console.log('bqt  objet :',this.pas.value[i]);
          this.ApiService.post(endPoint,this.pas.value[i]).subscribe(
            (res:any) => {
              console.log('res planification====>',res);
            this.showSuccess('La création bine effectué')
            this.getAllBQT()
            this.deleStorageAndClose();
            console.log('bqt  objet :',i,'created successfully!',);
            }),
            (error: any) => {
              this.showDanger('La création a échouée')
            }
          }
      }

      updatePlanAction(){
        let endPoint =  'planactionbqt';
        console.log('Edit mode',this.PasForm.value,'he',this.form.value);
          for(let i=0; i<this.pas.value.length; i++){
            this.pas.value[i].Status= Number(this.pas.value[i].Status)
            this.pas.value[i].bqt= Number(this.pas.value[i].bqt)
            console.log('bqt  objet :',this.pas.value[i]);
            this.ApiService.put(endPoint,this.IdTOc,this.pas.value[i]).subscribe(
            (res:any) => {
              console.log('res planification update====>',res);
            this.showSuccess('La mise çà jour bien effectuée')
            this.getAllBQT()
            this.deleStorageAndClose();
            console.log('bqt  objet :created successfully!',);
            }),
            (error: any) => {
              this.showDanger('La mise à jour a échoué')
            }
          }
      }

}
