import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerService } from '../../services/Spinner.service'
import { ApiService } from '../../services/api.service'
import { ToastService } from '../../services/toast.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rai',
  templateUrl: './rai.component.html',
  styleUrls: ['./rai.component.scss']
})
export class RaiComponent implements OnInit {

  searchToc:any;
  disableChamp:boolean = false;
  idGobal:any;
  idTocStep1:any;
  idtocpro:any;
  idrai:any;
  idTocProbleme:any;
  idTocRai:any;
  data:any;
  IdToc:any
  idToc:any;
  IdTocFilnale:any
  numeroToc:any
  step1:any = {};
  step2:any = {};
  step2Update:any = {};
  step3Update:any = {};
  step3:any = {};
  totalStep:any = {};

  listPays:any = [];
  listPlateforme:any = [];
  listPriorite:any = [];
  ListTickOcean:any = [];
  NewListTickOcean:any = [];


  headerModal:string = '';
  hideSPan:boolean = false;
  loading:boolean = false;
  loading1:boolean = false;
  loading2:boolean = false;
  listRAI:any;
  closeResult: any;
  modalRef: NgbModalRef | any;
  stepExpe: boolean = false;
  stepDest: boolean = false;
  stepTranc: boolean = false;

  groundStep1: any;
  groundStep2: any;
  groundStep3: any;

  background1: any;
  background2: any;
  background3: any;

  Pays:any = [
    {id:1, value:"Côte d'ivoire"},
    {id:2, value:"Sénégal"},
    {id:3, value:"Togo"},
    {id:4, value:"Mail"}
  ]

  Priorite:any = [
    {id:1, value:"P1"},
    {id:2, value:"P2"},
    {id:3, value:"P3"},
    {id:4, value:"P4"}
  ]

  Plateforme:any = [
    {id:1, value:"Service A"},
    {id:2, value:"Service B"},
  ]

  Porteur:any = [
    {id:1, value:"Charles Modeste KAMBO"},
    {id:2, value:"Roland AMON"},
    {id:2, value:"Elodie TUHE LOU"},
  ]

  TypeProbleme:any = [
    {id:1, value:"MAJEUR"},
    {id:2, value:"RECURRENT"},
  ]

  constructor(private router: Router,private toastr: ToastrService,private modalService: NgbModal, private SpinnerService:SpinnerService,private ApiService:ApiService , private ToastService:ToastService) {}


  ngOnInit() {
    localStorage.setItem('hideExpe', JSON.stringify(true));
    localStorage.removeItem('hideDest');
    localStorage.removeItem('hideTranc');

    this.getPays();
    this.getPlateforme();
    this.getPriorite();
    this.getRAI();
    this.getNumbTicket();
  }

  deleStorageAndClose(){
    this.modalRef.dismiss( 'Close click') ;
    localStorage.removeItem('hideDest');
    localStorage.removeItem('hideTranc');
    this.background1 = false;
    this.background2 = false;
    this.background3 = false;
    this.step1 ={};
    this.step2 ={};
    this.step3 ={};
    this.numeroToc= '';
    this.IdToc = '';
    this.IdTocFilnale = '';
  }

  showSuccess(msg:any) {
    this.toastr.success(msg);
  }

  showDanger(msg:any){
    this.toastr.error(msg);
  }

  nextStep1(){
    localStorage.setItem('hideTranc', JSON.stringify(true));
    const hideDistinataire = JSON.parse(localStorage.getItem('hideDest') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideDistinataire && hideExpediteur && this.numeroToc && this.step1.pays &&  this.step1.priorite &&  this.step1.heurD
      && this.step1.Datedebut && this.step1.Datefin && this.step1.heurF && this.step1.heurD && this.step1.Datedebut && this.step1.Datedebut
      && this.step1.Description && this.step1.SerPlat) {
      this.groundStep1 = false;
      this.groundStep2 = true;
      this.groundStep3 = false;

      this.background1 = true;
      this.background2 = false;


    }else{
      if (!this.numeroToc) {
        this.toastr.error('Renseigner le Ticket oceane SVP');
          return;
        }

      if (!this.step1.pays) {
        this.toastr.error('Selectionner le pays SVP');
        return;
        }

      if (!this.step1.priorite) {
        this.toastr.error('renseigner priorité SVP');
          return;
        }

        if (!this.step1.Datedebut) {
        this.toastr.error('renseigner la date de debut SVP');
            return;
          }

          if (!this.step1.heurD) {
        this.toastr.error('renseigner l\'heure de debut SVP');
              return;
            }

          if (!this.step1.Datefin) {
        this.toastr.error('renseigner la date retablissement SVP');
              return;
            }

            if (!this.step1.heurF) {
        this.toastr.error('renseigner l\'heure de retablissement SVP');
                return;
              }

            if (!this.step1.Description) {
        this.toastr.error('renseigner la description SVP');
                return;
              }

              if (!this.step1.SerPlat) {
                this.toastr.error('renseigner la description SVP');
                        return;
                      }

    }

      let endPoint = 'tocticket';
      let data =
      {
        Numero: this.numeroToc
      }

      console.log('data ticket ocean ajout', data,endPoint);

      this.ApiService.post(endPoint, data).subscribe(
        (res: any) => {
          console.log('data res rai ticket', res);
          this.showSuccess('La création du ticket bien effectuée');
          this.loading = true;
          this.createRAi(res);
        },
        (error: any) => {
          this.showDanger('La création de la RAI effectué');
        }
      );

      }

  updateStep1(){
    localStorage.setItem('hideTranc', JSON.stringify(true));
    const hideDistinataire = JSON.parse(localStorage.getItem('hideDest') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideDistinataire && hideExpediteur && this.numeroToc && this.step1.pays &&  this.step1.priorite &&  this.step1.heurD
      && this.step1.Datedebut && this.step1.Datefin && this.step1.heurF && this.step1.heurD && this.step1.Datedebut && this.step1.Datedebut
      && this.step1.Description && this.step1.SerPlat) {
      this.groundStep1 = false;
      this.groundStep2 = true;
      this.groundStep3 = false;

      this.background1 = true;
      this.background2 = false;

    }
    let endPoint = 'tocticket';
    let data =
      {
        Numero: this.numeroToc
      }
      console.log('data ticket mise à jour ocean ajout', data,endPoint);
      this.ApiService.put(endPoint, this.idToc, data).subscribe(
        (res: any) => {
          console.log('data res mise à jour rai ticket', res);
          this.updateRAi(res);
          this.showSuccess('La mise à jour du numéro de ticket bien effectuée');
          this.loading = true;
        },
        (error: any) => {
          this.showDanger(`La mise à jour numéro du ticket non effectuée.
          Roote cause: ${error}`);
        }
      );
  }

  viewStep1(){
    localStorage.setItem('hideTranc', JSON.stringify(true));
    const hideDistinataire = JSON.parse(localStorage.getItem('hideDest') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideDistinataire && hideExpediteur) {
      this.groundStep1 = false;
      this.groundStep2 = true;
      this.groundStep3 = false;
      this.background1 = true;
      this.background2 = false;
      this.step2 =  {...this.step2Update}
    }
  }


  updateRAi(toc?: any) {
    let endPoint = 'toc';

    let data = {
      toctik: toc.id,
      priorite: this.step1.priorite,
      pays: this.step1.pays,
      Datedebut: this.step1.Datedebut,
      heurD: this.step1.heurD,
      Datefin: this.step1.Datefin,
      heurF: this.step1.heurF,
      Description: this.step1.Description,
      SerPlat: this.step1.SerPlat,
    };
    console.log('data rai create mise à jour', data , this.idTocStep1);
    this.loading = true;
    this.ApiService.put(endPoint,this.idTocStep1, data)
      .subscribe(
        (res: any) => {
          console.log('creatte rai mise à jour', res);
          if (res) {
            this.IdToc = res.id;
            console.log('IdToc mise à jour', this.IdToc);
            this.showSuccess('La mise à jour de cette étape bien effectuée ')
            this.loading = false;
      this.step2 =  {...this.step2Update}

          } else {
            console.log('erreur');
            this.loading = false;
            this.showDanger(' mise à jour de cette étape a échouée')
          }
        },
        (error: any) => {
          this.loading = false;
        }
      );
  }


  createRAi(toc?: any) {
    let endPoint = 'toc';
    let data = {
      toctik: toc.id,
      priorite: this.step1.priorite,
      pays: this.step1.pays,
      Datedebut: this.step1.Datedebut,
      heurD: this.step1.heurD,
      Datefin: this.step1.Datefin,
      heurF: this.step1.heurF,
      Description: this.step1.Description,
      SerPlat: this.step1.SerPlat,
    };
    console.log('data rai create', data);
    this.loading = true;
    this.ApiService.post(endPoint, data)
      .subscribe(
        (res: any) => {
          console.log('creatte rai', res);
          if (res) {
            this.IdToc = res.id;
            console.log('IdToc', this.IdToc);
            this.showSuccess('La création de la RAI effectué')
            this.loading = false;
          } else {
            console.log('erreur');
            this.loading = false;
            this.showDanger('La création de la RAI a échoué')
          }
        },
        (error: any) => {
          this.loading = false;
        }
      );
  }

btnsled(){
  this.router.navigate(['plan-action-rai']);
}

  nextStep2(){
    const hideDistinataire = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    const hideTrasaction = JSON.parse(localStorage.getItem('hideTranc') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideDistinataire && hideExpediteur && hideTrasaction && this.step2.Numerotocpro &&  this.step2.Porteur &&
      this.step2.typeproblem && this.IdToc != undefined && this.IdToc != null) {
      this.groundStep1 = false;
      this.groundStep2 = false;
      this.groundStep3 = true;

      this.background1 = true;
      this.background2 = true;
    }
    else{
      if (!this.step2.Numerotocpro) {
        this.toastr.error('Renseigner le numéro ticket problème SVP');
          return;
        }

      if (!this.step2.Porteur) {
        this.toastr.error('Selectionner le porteur SVP');
        return;
        }

      if (!this.step2.typeproblem) {
        this.toastr.error('Selectionner le type du problème SVP');
          return;
        }

    }

    let endPoint = 'tocprobleme';
    let data =
    {
      Numerotocpro: this.step2.Numerotocpro,
      toc:this.IdToc,
      typeproblem  :this.step2.typeproblem,
      Porteur: this.step2.Porteur,
    }

    console.log('data ticket  probleme ajout', data);
    this.loading1 = true;
    this.ApiService.post(endPoint, data).subscribe(
      (res: any) => {
        console.log('data res ticket probleme', res);
        this.showSuccess('La création bine effectué')
        this.IdTocFilnale = res.id
        console.log('IdTocFilnale', this.IdTocFilnale);
        this.loading1 = false;
      },
      (error: any) => {
        this.showDanger('La création a échoué')
      }
    );

  }


  updateStep2(){
    const hideDistinataire = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    const hideTrasaction = JSON.parse(localStorage.getItem('hideTranc') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideDistinataire && hideExpediteur && hideTrasaction && this.step2.Numerotocpro &&  this.step2.Porteur &&
      this.step2.typeproblem && this.IdToc != undefined && this.IdToc != null) {
      this.groundStep1 = false;
      this.groundStep2 = false;
      this.groundStep3 = true;

      this.background1 = true;
      this.background2 = true;
      this.step3 =  {...this.step3Update}
    }
    console.log('id step2 ====>', this.step2);
    let endPoint = 'tocprobleme';
    this.data =
    {
      Numerotocpro: this.step2.Numerotocpro,
      toc:this.IdToc,
      typeproblem  :this.step2.typeproblem,
      Porteur: this.step2.Porteur,
    }

    console.log('data ticket probleme mise à jour ajout', this.data);
    this.loading1 = true;
    this.ApiService.put(endPoint, this.idtocpro, this.data).subscribe(
      (res: any) => {
        console.log('data res ticket probleme mise à jour', res);
        this.showSuccess('La mise à jour a bien été effectuée')
        this.IdTocFilnale = res.id
        console.log('IdTocFilnale mise à jour', this.IdTocFilnale);
        this.loading1 = false;
      },
      (error: any) => {
        this.showDanger('La mise à jour du ticket probleme a échoué')
      }
    );
  }

  viewStep2(){
    const hideDistinataire = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    const hideTrasaction = JSON.parse(localStorage.getItem('hideTranc') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideDistinataire && hideExpediteur && hideTrasaction) {
      this.groundStep1 = false;
      this.groundStep2 = false;
      this.groundStep3 = true;
      this.background1 = true;
      this.background2 = true;
      this.step3 =  {...this.step3Update}
    }
  }


  finalStep(){
    let endPoint = 'rai';
    if (this.IdTocFilnale != undefined && this.IdTocFilnale != null) {
       this.data =
      {
        tocprobleme : this.IdTocFilnale,
        declenchement : this.step3.declenchement,
        status : this.step3.status,
        Rapportredige :this.step3.Rapportredige,
        Rapportpartage : this.step3.Rapportpartage,
        Comptrendus : this.step3.Comptrendus,
        Jointoc :this.step3.Jointoc,
        Rairecu :this.step3.Rairecu,
        Cause : this.step3.Cause,
        Rootcause : this.step3.Rootcause,
        Statrootcause : this.step3.Statrootcause,
        Actionretablissement : this.step3.Actionretablissement,
        Datecritere : this.step3.Datecritere,
        Typesolution : this.step3.Typesolution,
        Commentaire : this.step3.Commentaire,
        DateRept : this.step3.DateRept
      }
    }else{
      this.showDanger('Erréur sur le toc problème')
    }
    console.log('data create RAI ajout', this.data);
    this.loading2 = true;
    this.ApiService.post(endPoint, this.data).subscribe(
      (res: any) => {
        console.log('data res RAI data', res);
        this.loading2 = false;
        this.router.navigate(['plan-action-rai']);
        this.showSuccess('La création bine effectué')
        this.deleStorageAndClose()
        this.getNumbTicket()
      },
      (error: any) => {
        this.showDanger('La création bine effectué')
      }
    );
  }

  editRAI(){
    let endPoint = 'rai';
    if (this.IdTocFilnale != undefined && this.IdTocFilnale != null) {
       let data =
      {
        tocprobleme : this.IdTocFilnale,
        declenchement : this.step3.declenchement,
        status : this.step3.status,
        Rapportredige :this.step3.Rapportredige,
        Rapportpartage : this.step3.Rapportpartage,
        Comptrendus : this.step3.Comptrendus,
        Jointoc :this.step3.Jointoc,
        Rairecu :this.step3.Rairecu,
        Cause : this.step3.Cause,
        Rootcause : this.step3.Rootcause,
        Statrootcause : this.step3.Statrootcause,
        Actionretablissement : this.step3.Actionretablissement,
        Datecritere : this.step3.Datecritere,
        Typesolution : this.step3.Typesolution,
        Commentaire : this.step3.Commentaire,
        DateRept : this.step3.DateRept
      }

      console.log('data mise à jour RAI ajout mise à jour', data);
      this.loading2 = true;
      this.ApiService.put(endPoint,this.idrai, data).subscribe(
        (res: any) => {
          console.log('data res RAI data mise à jour', res);
          this.loading2 = false;
          this.showSuccess('La mise à jour a bien été effectuée')
          this.deleStorageAndClose()
          this.getNumbTicket()
        },
        (error: any) => {
          this.showDanger('La mise à jour non effectuée')
        }
      );
    }

  }

  viewStep3(){

  }

  getPays(){
    let endPoint = "pays"
      this.ApiService.get(endPoint).subscribe(
        (response:any) => {
          this.listPays = response;
          console.log('listPays', this.listPays);
        },
        (error:any) => {
          console.log('error',error);
        }
      );
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

  filterTicket(event:any){
    console.log('event===>',event);

    if (event) {
       this.ListTickOcean.map( (el:any)=>{
        console.log('el===>', el,this.searchToc);
        if (event.includes(el.Numero)) {
          this.NewListTickOcean.push(el)
        }
        this.NewListTickOcean =  this.ListTickOcean
      })
    }else{
      this.NewListTickOcean =  this.ListTickOcean
    }
  }


  getRAI(){
    let endPoint = "rai"
    this.SpinnerService.showSpinner()
      this.ApiService.get(endPoint).subscribe(
        (response:any) => {
          this.listRAI = response;
          this.SpinnerService.hideSpinner()
          console.log('listeRAI', this.listRAI);
        },
        (error:any) => {
          console.log('error',error);
        }
      );
  }

  getPriorite(){
    let endPoint = "priorite"
      this.ApiService.get(endPoint).subscribe(
        (response:any) => {
          this.listPriorite = response;
          console.log('listPriorite', this.listPriorite);
        },
        (error:any) => {
          console.log('error',error);
        }
      );
  }


  getPlateforme(){
    let endPoint = "platform"
      this.ApiService.get(endPoint).subscribe(
        (response:any) => {
          this.listPlateforme = response;
          console.log('listPlateforme', this.listPlateforme);
        },
        (error:any) => {
          console.log('error',error);
        }
      );
  }

  findEdit(rai:any){
    console.log('rai=====>', rai);
    let endPoint = 'toc'
    this.idToc=rai.id;
    // this.idTocRai=rai.toc[0].id;
    // this.idTocProbleme=rai.toc[0].tocpro[0].id;
    this.ApiService.getOptionFind(endPoint,rai.id).subscribe(
      (data:any)=>{
        console.log('data toc ====>',data)
        this.idGobal = data
          this.step1 = data;
          console.log('step1====>', this.step1);
          this.idTocStep1 =  data.id
          this.idtocpro =data.tocpro[0].id;
          this.idrai = data.tocpro[0].rai[0].id
          let endPointToc ="tocprobleme"
          let endPointRai ="rai"

          this.ApiService.getOptionFind(endPointToc,this.idtocpro).subscribe((data:any)=>{
            this.step2Update = data
            console.log('step2Update',data)
          });
          this.ApiService.getOptionFind(endPointRai,this.idrai).subscribe((data: any)=>{
            this.step3Update =  data;

            console.log('step3Update',data)
          });
            console.log(this.idrai)
        });
  }

  openView(content:any, rai?:any) {
    this.disableChamp = true;
    if (rai != undefined ) {
      console.log('++++rai',rai)
      this.numeroToc =  rai.Numero;
      this.findEdit(rai)
    }
    localStorage.setItem('hideDest', JSON.stringify(true));
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideExpediteur) {
      this.groundStep1 = true;
      this.groundStep2 = false;
      this.groundStep3 = false;
    }
    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);

    });
  }

  open(content:any, rai?:any) {
    if (rai != undefined) {
      console.log('++++rai',rai)
      this.numeroToc =  rai.Numero;
      this.findEdit(rai)
    }
    localStorage.setItem('hideDest', JSON.stringify(true));
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideExpediteur) {
      this.groundStep1 = true;
      this.groundStep2 = false;
      this.groundStep3 = false;
    }
    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);

    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
