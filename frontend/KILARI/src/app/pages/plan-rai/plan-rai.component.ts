import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  elementView:any ={};
  disabledTocpr:boolean = false;
  disableChamp:boolean = false;
  selectedOS:any
  title:any
  tilreBtn:any;
  disableBtnAdd:boolean = false
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
  IdTOc:any;
  objet : any
  default:any
  defaultString:any
  dt : any = []
  updateOrCreate:boolean = false;


  Porteur:any = [
    {id:1, value:"Charles Modeste KAMBO"},
    {id:2, value:"Roland AMON"},
    {id:2, value:"Elodie TUHE LOU"},
  ]

  constructor(private SpinnerService:SpinnerService,private toastr: ToastrService,private router: Router,private ApiService:ApiService ,private modalService: NgbModal,
    private fb: FormBuilder) {

    this.PasForm = this.fb.group({
      pas: this.fb.array([]),
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

 }

  deleStorageAndClose(){
    this.modalRef.dismiss( 'Close click') ;
    // this.PasForm.reset();
    this.PasForm.reset();
    this.pas.clear();
    this.default = "";
    this.defaultString = "";
  }

  open(content:any, plan_rai?:any) {
    this.disabledTocpr = true
    this.default = plan_rai.id
this.defaultString = plan_rai.Numerotocpro;
    this.title = "Création d'un plan d'action rai";
    this.tilreBtn =  "Enregistrer le PA"
    this.updateOrCreate = false;
    console.log('item', plan_rai , this.default);
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
    this.default = item.id
this.defaultString = item.Numerotocpro;
console.log('item', item);
    this.title = "Modification d'un plan d'action rai";
    this.tilreBtn =  "Enregistrer le PA modifier"
    this.updateOrCreate =  true
    this.disableBtn =  false;
    this.disableBtnAdd = true
    if (!item) {
      this.PasForm.reset();
    }
    for (let index = 0; index < item.planrai.length; index++) {
      const element = item.planrai[index];
      console.log('element',element);
      this.IdTOc =  element.id;
      const res = new FormGroup({
          Libelle: new FormControl(element.Libelle),
          Porteur: new FormControl(element.Porteur),
          Dateprevisionel: new FormControl(element.Dateprevisionel),
          Dateeffective: new FormControl(element.Dateeffective),
          Perimetre: new FormControl(element.Perimetre),
          Efficacite: new FormControl(element.Efficacite),
          Status: new FormControl(element.Status),
          Commentaire: new FormControl(element.Commentaire),
          tocpr: new FormControl(element.tocpr),
        });
        this.pas.push(res);
    }
    console.log('this.pas edit====++', this.pas);

    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });

  }

  openView(contentView:any, item?:any) {
    this.disableChamp = false
    console.log('this.disableChamp ',this.disableChamp );

    this.defaultString = item.Numerotocpro;

    this.elementView = {...item}
    this.title = "Détails du plan d'action rai";
    this.tilreBtn =  "Enregistrer le PA modifier"
    this.updateOrCreate = true
    this.disableBtn =  false;
    this.disableBtnAdd = true
    this.IdTOc =  item.id;
    console.log('item', item,this.IdTOc);
    if (!item) {
      this.PasForm.reset();
    }
    for (let index = 0; index < item.planrai.length; index++) {
      const element = item.planrai[index];
      console.log('element',element);

      const res = new FormGroup({
          Libelle: new FormControl(element.Libelle),
          Porteur: new FormControl(element.Porteur),
          Dateprevisionel: new FormControl(element.Dateprevisionel),
          Dateeffective: new FormControl(element.Dateeffective),
          Perimetre: new FormControl(element.Perimetre),
          Efficacite: new FormControl(element.Efficacite),
          Status: new FormControl(element.Status),
          Commentaire: new FormControl(element.Commentaire),
          tocpr: new FormControl(element.tocpr),
        });
        this.pas.push(res);
    }

    this.modalRef =  this.modalService.open(contentView, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });

  }


  get pas() : FormArray {
    return this.PasForm.get("pas") as FormArray
  }

  get visigelForm(){
    return this.PasForm.valid;
  }

  addPas() {
    this.disableBtn =  false;
    const Formpass = this.fb.group({
      Libelle: new FormControl('', Validators.required),
      Porteur: new FormControl('', Validators.required),
      Dateprevisionel: new FormControl('', Validators.required),
      Dateeffective: new FormControl('', Validators.required),
      Perimetre: new FormControl('', Validators.required),
      Status: new FormControl('', Validators.required),
      Efficacite: new FormControl('', Validators.required),
      Commentaire: new FormControl('', Validators.required),
      tocpr: new FormControl(this.default , Validators.required),
      })
    this.pas.push(Formpass);
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

  getElement(event:any){
      // console.log('event', this.user)
    //   const value = event;
    //   this.currentUser = value  || "";
    //   console.log(" get user recuperer",this.currentUser);
    //   // console.
    //   // console.log('ID re',this.particicipant );
    //   let endPoint = "users";
    //  this.http.getOption(endPoint, this.currentUser )
    //  .subscribe(
    //    (res: any) => {
    //       if (res)
    //   {
    //     if (res) {
    //       console.log('res', res);
    //       const {tags,...reste} = res
    //       res.tags.map( (el:any)=> {
    //         this.tagsAll.push(el['@id'])
    //       })
    //       let result = reste;
    //       result.tags =  this.tagsAll
    //       console.log('result.tags',result);
    //       this.particicipant = { ...result  };
    //     }
    //     console.log("la liste des usersID", this.particicipant);
    //    }
    //   }
    //   );
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

  submitValed(){
    if (!this.updateOrCreate) {
      this.onSubmit();
    }
    else{
      this.updatePlanAction();
      this.getTocProbleme()
      this.deleStorageAndClose();
    }

  }

  onSubmit() {
    let endPoint =  'planaction';
    console.log('create mode',this.PasForm.value,this.pas.value.tocpr);
      this.objet = this.PasForm.value;
    for(let i=0; i<this.pas.value.length; i++){
        this.ApiService.post(endPoint,this.pas.value[i]).subscribe(
          (res:any) => {
            console.log('res planification====>',res);
          this.showSuccess('La création bine effectué')
          this.getTocProbleme()
          this.deleStorageAndClose();
          this.default = "";
          this.pas.clear();
          console.log('planaction  objet :',i,'created successfully!',);
          }),
          (error: any) => {
            this.showDanger('La création a échouée')
          }
        }
  }

  updatePlanAction(){
    // console.log('planaction =====>',this.pas.value[0],this.IdTOc);
    let endPoint =  'planaction';
    // return
    this.pas.value.forEach((element:any) => {
let data = {
  Libelle: element.Libelle,
  Porteur: element.Porteur,
  Dateprevisionel: element.Dateprevisionel,
  Dateeffective: element.Dateeffective,
  Perimetre: element.Perimetre,
  Efficacite: element.Efficacite,
  Status: element.Status,
  Commentaire: element.Commentaire,
  tocpr: element.tocpr,
}
      console.log('planaction  objet++++//element     :',data);
      this.ApiService.put(endPoint,element.id,data).subscribe(
      (res:any) => {
        console.log('res planification update====>',res);
      this.showSuccess('La mise ça jour est bien effectuée')

      console.log('planaction  objet :created successfully!',);
      }),
      (error: any) => {
        this.showDanger('La mise à jour a échoué')
      }
    });
      // for(let i=0; i< this.pas.value.length; i++){
      //   const element = this.pas.value[i];

      // }
  }


}
