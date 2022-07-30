import { Component, OnInit } from '@angular/core';
// import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerService } from '../../services/Spinner.service'
import { ApiService } from '../../services/api.service'
import { ToastService } from '../../services/toast.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { right } from '@popperjs/core';
// // pdfMake.vfs = pdfFronts.pdfFronts.vfs
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;//

@Component({
  selector: 'app-Bqt',
  templateUrl: './Bqt.component.html',
  styleUrls: ['./Bqt.component.scss']
})
export class BqtComponent implements OnInit {

  commantaire:string;
  titleModal:any;
reloading:boolean = false;

  search:any;
  // modalRef: NgbModalRef | any;
  loading:boolean = true
  shoEdit:boolean =false;
  elementBQT:any = {};
  ListBQT:any = [];
  disableChamp:boolean = false;
  filteredItems:any = [];
  IdBQT:any;

  isVisibleBQT:boolean = false;
  isVisibleBQTDetail:boolean = false;

  constructor(private router: Router,private toastr: ToastrService, private SpinnerService:SpinnerService,private ApiService:ApiService , private ToastService:ToastService) { }

  ngOnInit() {
    this.getAllBQT();
  }

  deleStorageClose(){
    // this.modalRef.dismiss('Close click') ;
    // this.elementBQT = {}
    this.isVisibleBQT = false
  }

  Status:any = [
    {id:1, value:"OK"},
    {id:2, value:"NOK"},
  ]

  StatusCR:any = [
    {id:1, value:"OUI"},
    {id:2, value:"NON"},
  ]

  fileChangeBQT(event:any) {
    if (event.target.files && event.target.files.length > 0) {
       let extensionFile = event.target.files[0].name.split('.').pop()
      this.elementBQT.uploadedFilePword = event.target.files[0];
      console.log('FILE', this.elementBQT.uploadedFilePword);

    }
  }

  reloadPage(){
    this.search = "";
    this.reloading = true
    // location.reload();
    this.getAllBQT()
  }

  fileChangeRendu(event:any) {
    if (event.target.files && event.target.files.length > 0) {
       let extensionFile = event.target.files[0].name.split('.').pop()
      this.elementBQT.uploadedFileCompteR = event.target.files[0];
      console.log('FILE', this.elementBQT.uploadedFileCompteR);

    }
  }

  filterSearch(event:any){
    console.log('event===>',event.target.value);
    this.search = event.target.value
    if (event.target.value   ) {
        this.ListBQT.filter((el:any)=>{
        if ( el.Libelle.toLowerCase().includes(event.target.value.toLowerCase()) ) {
            this.ListBQT = []
             this.ListBQT.push(el);
             this.ListBQT;
        }
        else if(!el.Libelle.toLowerCase().includes(event.target.value.toLowerCase())){
          console.log('aaaa=>>',el.Libelle.toLowerCase().includes(event.target.value.toLowerCase()));
            this.ListBQT
        }
      })
    }

    if (!event.target.value) {
      console.log('==><====NUm',this.ListBQT);
        this.ListBQT
    }
  }

  // async createPDF(){
  //   this.handleCancel();
  //       const pdfDefinition:any = {

  //         content: [
  //           {
  //             alignment: 'justify',
  //             columns: [
  //               {
  //                 image: await this.getBase64ImageFromURL('../../../assets/Orangelogo.png'),
  //                 width: 50,
  //                 height: 50,
  //                 padding: [ 0, 0, 40, 0 ]
  //               },
  //               {
  //                 text: 'ENREGISTREMENT DU RAI',
  //                 color:'#ff7900',
  //                 fontSize: 30,
  //                 fontweight: 600,
  //                 alignment:'right'
  //               }
  //             ]
  //           },
  //           '\n\n',
  //           {
  //             columns:[
  //               {
  //                 text: 'Rapport d’Analyse d’Incident',
  //                 color:'#ff7900',
  //                 fontSize: 20,
  //                 fontweight: '900'
  //               }
  //             ]
  //           },
  //           '\n',
  //           {
  //             text:'NB : Il faut noter que toutes les heures du rapport sont en heure GMT.',
  //             fontSize: 15,
  //             fontweight: '600'
  //           },
  //           '\n',
  //           {
  //             style: 'tableExample',
  //             table: {
  //               widths: [200, 200],
  //               headerRows: 1,
  //               body: [
  //                 [{text: 'PERIODE', style: 'tableHeader', colSpan: 2, alignment: 'center',fillColor:'#ff7900',with:'100%'}, {}],
  //                 [{text: 'Date et heure de début', style: 'tableHeader',fillColor:'#f8ab67',with:'100%'}, {text: 'Date et heure de début', style: 'tableHeader',fillColor:'#f8ab67',with:'100%'}],
  //                 [
  //                   `${this.stepVIew.Datedebut} ${this.stepVIew.heurD}`,
  //                   `${this.stepVIew.Datefin} ${this.stepVIew.heurF}`
  //                 ]
  //               ]
  //             }
  //           },
  //           '\n\n',
  //           {
  //             style: 'tableExample',
  //             table: {
  //               widths: [150, 150, 150],
  //               headerRows: 1,
  //               body: [
  //                 [{text: 'CRITICITE', style: 'tableHeader', colSpan: 3, alignment: 'center',fillColor:'#ff7900',with:'100%'}, {},{}],
  //                 [{text: 'P1', style: 'tableHeader',fillColor:'#f8ab67',with:'100%'}, {text: 'P2', style: 'tableHeader',fillColor:'#f8ab05',with:'100%'},  {text: 'P3', style: 'tableHeader',fillColor:'#f80c05',with:'100%'}],
  //                 [
  //                   this.stepVIew.priorite === "P1" ? "X" : "  ",
  //                   this.stepVIew.priorite === "P2" ? "X" : "  ",
  //                   this.stepVIew.priorite === "P3" ? "X" : "  ",

  //                 ]
  //               ]
  //             }
  //           },
  //           '\n\n',
  //           {
  //             style: 'tableExample',

  //             table: {
  //               widths: [150, 350],
  //               headerRows: 1,
  //               body: [
  //                 [
  //                   {text: 'IMPACT', style: 'tableHeader', colSpan: 2, alignment: 'center',fillColor:'#ff7900',with:'100%'},{}],
  //                 [
  //                   {text: 'Localisation', style: 'tableHeader',fillColor:'#f8ab67',with:'100%'},
  //                   {text: 'P2', style: 'tableHeader',fillColor:'#f8ab05',with:'100%'}
  //                 ],
  //                 [
  //                   {text: 'Début de l’incident', style: 'tableHeader',fillColor:'#f8ab67'},
  //                   `${this.stepVIew?.Numero}`
  //                 ],
  //                 [
  //                   {text: 'Impacts Plateformes', style: 'tableHeader',fillColor:'#f8ab67'},
  //                   `${this.stepVIew?.Platforme}`

  //                 ],
  //                 [
  //                   {text: 'Impacts services', style: 'tableHeader',fillColor:'#f8ab67'},
  //                   `${this.stepVIew?.Service}`

  //                 ],
  //                 [
  //                   {text: 'Priorité', style: 'tableHeader',fillColor:'#f8ab67'},
  //                   `${this.stepVIew?.priorite}`
  //                 ],
  //                 [
  //                   {text: 'Description de l’incident', style: 'tableHeader',fillColor:'#f8ab67'},
  //                   `${this.stepVIew?.Description}`
  //                 ],
  //                 [
  //                   {text: 'Action rétablissement Plan d\’action', style: 'tableHeader',fillColor:'#f8ab67'},
  //                   `${this.stepVIew?.tocpro[0]?.rai[0]?.Actionretablissement}`
  //                 ],
  //                 [
  //                   {text: 'Fin de l’incident', style: 'tableHeader',fillColor:'#f8ab67'},
  //                   `${this.stepVIew?.Datedebut} ${this.stepVIew?.heurD}`
  //                 ],
  //                 [
  //                   {text: 'Durée de l’incident', style: 'tableHeader',fillColor:'#f8ab67'},
  //                   `${this.stepVIew?.Datedebut} ${this.stepVIew?.heurD}`
  //                 ],
  //                 [
  //                   {text: 'Statut actuel', style: 'tableHeader',fillColor:'#f8ab67'},
  //                   `${this.stepVIew?.tocpro[0]?.rai[0]?.status}`
  //                 ],
  //               ]
  //             }
  //           },
  //         ],
  //         styles: {
  //           header: {
  //             fontSize: 18,
  //             bold: true
  //           },
  //           bigger: {
  //             fontSize: 15,
  //             italics: true
  //           }
  //         },
  //       }

  //       const pdf = pdfMake.createPdf(pdfDefinition)
  //       pdf.open();
  //     }

  showSuccess(msg:any) {
    this.toastr.success(msg);
  }

  showDanger(msg:any){
    this.toastr.error(msg);
  }

  getAllBQT(){
    let endPoint = "bqt"
    this.SpinnerService.hideSpinner()
    this.ApiService.get(endPoint).subscribe(
      (response:any) => {
        this.ListBQT = response;
        this.loading = false;
        this.reloading = false
        // this.commantaire = this.ListBQT[0].ComptRendus.slice(0,100)
        console.log('ListBQT', this.ListBQT,this.commantaire);
    this.SpinnerService.hideSpinner()

      },
      (error:any) => {
        console.log('error',error);
    this.SpinnerService.hideSpinner()
    this.reloading = false

    this.loading = false;

      }
    );
  }

  showModal1(bqt?:any): void {
    this.isVisibleBQT = true;
  this.shoEdit =  false;
    this.titleModal = "Creation d'une BQT"
    if (bqt != undefined && bqt.id) {
      console.log('++++bqt edit',bqt)
      this.disableChamp = false
      this.shoEdit =true;
      this.IdBQT =  bqt.id
      this.elementBQT = {...bqt}
    this.titleModal = "Modification de la BQT"
    }
  }

  showModal1Detail(bqt?:any): void {
    this.titleModal = "Detail de la BQT";
    this.isVisibleBQTDetail = true;
    this.elementBQT = {...bqt}
  }


  handleCancel(): void {
    console.log('handleCancel',);
    this.isVisibleBQT = false;
    this.elementBQT = {}
    this.isVisibleBQTDetail = false
  }


  SauveBQT(){
    if (!this.elementBQT.Libelle) {
      this.toastr.error('Renseigner le libéllé de la BQT SVP');
        return;
      }

    if (!this.elementBQT.Status) {
      this.toastr.error('Selectionner le status de la BQT SVP');
      return;
      }

    if (!this.elementBQT.datebqt) {
      this.toastr.error('Selectionner la date de la BQT SVP');
        return;
      }
      if (!this.elementBQT.ComptRendus) {
        this.toastr.error('Renseigner le compte rendu de la BQT SVP');
          return;
        }

    let endPoint = 'bqt';
    let data =
    {
      Libelle: this.elementBQT.Libelle,
      Status: this.elementBQT.Status,
      datebqt: this.elementBQT.datebqt,
      ComptRendus: this.elementBQT.ComptRendus,
      uploadedFileCompteR: this.elementBQT.uploadedFileCompteR,
      uploadedFilePword: this.elementBQT.uploadedFilePword,
    }

    console.log('data bqt ajout', data,endPoint);
this.loading = false
    this.ApiService.post(endPoint, data).subscribe(
      (res: any) => {
        console.log('data res bqt', res);
        this.handleCancel();
        this.showSuccess('La création du BQT bien effectuée');
        this.getAllBQT();
        this.elementBQT = {};
        this.loading = true;
      },
      (error: any) => {
        this.loading = true;
        this.showDanger('La création de la bqt effectuée');
      }
    );
  }

  updateBQT(){

    if (!this.elementBQT.Libelle) {
      this.toastr.error('Renseigner le libéllé de la BQT SVP');
        return;
      }

    if (!this.elementBQT.Status) {
      this.toastr.error('Selectionner le status de la BQT SVP');
      return;
      }

    if (!this.elementBQT.datebqt) {
      this.toastr.error('Selectionner la date de la BQT SVP');
        return;
      }
      if (!this.elementBQT.ComptRendus) {
        this.toastr.error('Renseigner le compte rendu de la BQT SVP');
          return;
    }

    let endPoint = 'bqt';
    let data =
    {
      Libelle: this.elementBQT.Libelle,
      Status: this.elementBQT.Status,
      datebqt: this.elementBQT.datebqt,
      ComptRendus: this.elementBQT.ComptRendus,
      uploadedFileCompteR: this.elementBQT.uploadedFileCompteR,
      uploadedFilePword: this.elementBQT.uploadedFilePword,
    }

    console.log('data bqt ajout', data,endPoint);
    this.loading = false;
    this.ApiService.put(endPoint, this.IdBQT ,data).subscribe(
      (res: any) => {
        console.log('data res bqt', res);
        this.showSuccess('La mise à jour de la BQT bien effectuée');
        this.handleCancel();
        this.getAllBQT();
        this.loading = true;
      },
      (error: any) => {
        this.loading = true;
        this.showDanger('La mise à jour de la bqt non effectuée');
      }
    );
  }



//   assignCopy(){
//     this.filteredItems = Object.assign([], this.ListBQT);
//  }

//  filterItem(value:any){
//    console.log('value===>event',value.target);

//     if(!value.target){
//         this.assignCopy();
//     } //when nothing has typed
//     this.filteredItems = Object.assign([], this.ListBQT).filter(
//        (item:any) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
//     )
//  }
//  this.assignCopy();//when you fetch collection from server.

}
