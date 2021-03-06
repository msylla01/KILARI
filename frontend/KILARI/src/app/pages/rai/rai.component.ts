import { Component, OnInit } from '@angular/core';
// import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerService } from '../../services/Spinner.service'
import { ApiService } from '../../services/api.service'
import { ToastService } from '../../services/toast.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as moment from "moment";
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

import { filter } from 'rxjs/operators';


import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
// pdfMake.vfs = pdfFronts.pdfFronts.vfs
import { ThisReceiver } from '@angular/compiler';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { right } from '@popperjs/core';
// // pdfMake.vfs = pdfFronts.pdfFronts.vfs
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;// (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

// const pdfMake = require('pdfmake/build/pdfmake.js');
// const pdfFonts = require("pdfmake/build/vfs_fonts");
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import * as pdfMake from 'pdfmake/build/pdfmake';

// import * as pdfMake from 'pdfmake/build/pdfmake.js';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface Typrobleme{
  Numero: Number;
  id: Number | null;
  toctiket: Number | null;
}
@Component({
  selector: 'app-rai',
  templateUrl: './rai.component.html',
  styleUrls: ['./rai.component.scss']
})


export class RaiComponent implements OnInit {

  cursor:any;
  changePays:any= [];
  ListPays:any = [];
  titleModal:any
  searchTerm:any;
  dissabledR:boolean = true;
  searchToc:any;
  disableChamp:boolean = false;
  idGobal:any;
  idTocStep1:any;
  idtocpro:any;
  idrai:any;
  idTocProbleme:any;
  idTocRai:any;
  data:any;
  IdToc:any = [];
  IdTocUpdate:any;
  idToc:any;
  IdTocFilnale:any = [];
  IdTocFilnaleUpdate:any;
  numeroToc:any
  step1:any = {};
  step2:any = {};
  step2Update:any = {};
  step3Update:any = {};
  step3:any = {};
  totalStep:any = {};

  isVisibleReservation = false;
  isVisibleDetail = false;


  findPays:any;
  findService:any;
  findPlatform:any;

  stepVIew:any;
  listPays:any = [];
  listPlateforme:any = [];
  listPriorite:any = [];
  ListTickOcean:any = [];
  NewListTickOcean:any = [];
  values:any = [
    // {} as Typrobleme
  ];

  headerModal:string = '';
  hideSPan:boolean = false;
  loading:boolean = false;
  loading1:boolean = false;
  loading2:boolean = false;
  listRAI:any;
  closeResult: any;
  // modalRef: NgbModalRef | any;
  stepExpe: boolean = false;
  stepDest: boolean = false;
  stepTranc: boolean = false;
  disabeldTIckToc:boolean = false;

  tagsPays:any =[];
  tagsPlat:any= [];
  tagsServi:any= [];

  groundStep1: any;
  groundStep2: any;
  groundStep3: any;
  groundStep4: any;

  backgroundStep1: any;
  backgroundStep2: any;
  backgroundStep3: any;
  backgroundSTep4: any;

  listService:any = [];
  uploading = false;
  fileList: NzUploadFile[] = [];

  // Pays:any = [
  //   {id:1, value:"C??te d'ivoire"},
  //   {id:2, value:"S??n??gal"},
  //   {id:3, value:"Togo"},
  //   {id:4, value:"Mail"}
  // ]

  StatusRAI:any = [
    {id:1, value:"R??alis??"},
    {id:2, value:"Planifi??"},
    {id:3, value:"Annul??"},
    {id:4, value:"Report??"},
    {id:5, value:"Non tenu"}
  ]

  Priorite:any = [
    {id:1, value:"P1"},
    {id:2, value:"P2"},
  ]

  // Plateforme:any = [
  //   {id:1, value:"Service A"},
  //   {id:2, value:"Service B"},
  // ]

  Porteur:any = [
    {id:1, value:"Charles Modeste KAMBO"},
    {id:2, value:"Roland AMON"},
    {id:2, value:"Elodie TUHE LOU"},
    {id:3, value:"CHARL??NE KADJI"},
  ]

  Pays:any = [
    {id:1, value:"VITIB"},
    {id:2, value:"KM4"},
    {id:3, value:"OTN"},
    {id:4, value:"OSN"},
    {id:5, value:"OSL"},
    {id:6, value:"ONE"},
    {id:7, value:"OML"},
    {id:8, value:"OMG"},
    {id:9, value:"OLB"},
    {id:10, value:"OJO"},
    {id:11, value:"OGN"},
    {id:12, value:"OGB"},
    {id:13, value:"OCM"},
    {id:14, value:"OCI"},
    {id:15, value:"OCF"},
    {id:16, value:"OCD"},
    {id:16, value:"OBW"},
    {id:17, value:"OBF"},
    {id:18, value:"ALL"},
    ]

    Service:any = [
      {id:1, value:"KAPPTIVATE"},
      {id:2, value:"GRAFANA"},
      {id:3, value:"PROMETHEUS"},
      {id:4, value:"CACTI"},
      {id:5, value:"OPEN NMS"},
      {id:6, value:"ISOS"},
      {id:7, value:"CENTREON"},
      {id:8, value:"OPC VITIB"},
      {id:9, value:"WAAAT"},
      {id:10, value:"WAAAT OPC"},
      {id:11, value:"MY ORANGE"},
      {id:12, value:"PADDOCK"},
      {id:13, value:"GAMELOFT"},
      {id:14, value:"GOOGLE RCS"},
      {id:15, value:"OMS"},
      {id:16, value:"MESSAGING PRO VOCAL"},
      {id:17, value:"MESSAGING PRO SMS"},
      {id:18, value:"IVR"},
      {id:19, value:"VOICE PRO (IVRAAS)"},
      {id:20, value:"MVA"},
      {id:21, value:"BONUS PROGRAM VOCAL"},
      {id:22, value:"BULK SMS"},
      {id:23, value:"ORANGE INFRA"},
      {id:24, value:"NOMAD"},
      {id:25, value:"MFM"},
  ]

  Platforme:any = [
    {id:1, value:"SDP"},
    {id:2, value:"USSD SHOP"},
    {id:3, value:"OTAP"},
    {id:4, value:"EME"},
    {id:5, value:"OBA"},
    {id:6, value:"ESM"},
    {id:7, value:"OTRS"},
    {id:8, value:"ARCSIGHT"},
    {id:9, value:"KMC"},
  ]

  Rediges:any = [
    {id:1, value:"OUI"},
    {id:2, value:"NON"},
    {id:2, value:"N/A"},
  ]

  RI_recu:any = [
    {id:1, value:"OUI"},
    {id:2, value:"NON"},
    {id:2, value:"N/A"},
  ]

  Partages:any = [
    {id:1, value:"OUI"},
    {id:2, value:"NON"},
    {id:2, value:"N/A"},
  ]

  Compte_rendu:any = [
    {id:1, value:"OUI"},
    {id:2, value:"NON"},
    {id:2, value:"N/A"},
  ]

  Join:any = [
    {id:1, value:"OUI"},
    {id:2, value:"NON"},
    {id:3, value:"N/A"},
  ]

  Stat_root:any = [
    {id:1, value:"OUI"},
    {id:2, value:"NOK"},
  ]

  action_solut:any = [
    {id:1, value:"Definitive"},
    {id:2, value:"Contournement"},
  ]

  declenchement:any = [
    {id:1, value:"1"},
    {id:2, value:"2"},
    {id:2, value:"3"},
    {id:2, value:"4"},
    {id:2, value:"5"},
  ]

  TypeProbleme:any = [
    {id:1, value:"MAJEUR"},
    {id:2, value:"RECURRENT"},
  ]
  ps: any;



  constructor(private msg: NzMessageService,private router: Router,private toastr: ToastrService, private SpinnerService:SpinnerService,private ApiService:ApiService , private ToastService:ToastService) {}



  ngOnInit() {
    localStorage.removeItem('hideDest');
    localStorage.removeItem('hideTranc');
    console.log('DisabledRAI',this.DisabledRAI);
    this.getPays();
    this.getPriorite();
    this.getRAI();
    this.getPays();
    this.getPlatforme()
    this.getService()
    this.getNumbTicket();
    this.filterTicket();
    this.getPlatforme();
    this.ImpactTicketUpdate()
    //this.func(1)
  }


  open(content:any, rai?:any) {
    this.titleModal = "Cr??ation d'un RAI"
    if (rai != undefined) {
      this.disabeldTIckToc = true;
      console.log('++++rai edit',rai, this.disabeldTIckToc)
      this.numeroToc =  rai.Numero;
      this.values.push(rai.Numero);
      this.disableChamp = false
    this.titleModal = "Modification d'un RAI"
      this.findEdit(rai)
    }
    localStorage.setItem('hideDest', JSON.stringify(true));
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideExpediteur) {
      this.groundStep1 = true;
      this.groundStep2 = false;
      this.groundStep3 = false;
    }
  }


  showModal1(rai?:any): void {
    // this.titleModal = "Ajouter une reservation";
    this.isVisibleReservation = true;
    this.DisabledRAI;
    this.titleModal = "Cr??ation d'un RAI"
    if (rai != undefined && rai.id) {
      this.disabeldTIckToc = true;
      console.log('++++rai edit',rai, this.disabeldTIckToc)

      this.values.push(...rai.toc);
      console.log('++++rai edit<<<<',this.values)

      this.disableChamp = false
    this.titleModal = "Modification d'un RAI"
      this.findEdit(rai)
    }
    localStorage.setItem('hideDest', JSON.stringify(true));
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideExpediteur) {
      this.groundStep1 = true;
      this.groundStep2 = false;
      this.groundStep3 = false;
      this.groundStep4 = false;
    }
  }

func(idval){
  let endPoint = 'pays'
  const result = this.Pays.find( ({ id }) => id === idval );
  return result.value // { name: 'cherries', quantity: 5 }
}
func1(idval){
  let endPoint = 'pays'
  const result = this.Service.find( ({ id }) => id === idval );
  return result.value // { name: 'cherries', quantity: 5 }
}
func2(idval){
  let endPoint = 'pays'
  const result = this.Platforme.find( ({ id }) => id === idval );
  return result.value // { name: 'cherries', quantity: 5 }
}

  findEdit(rai:any){
    console.log('rai=====>', rai, rai.id);
    let endPoint = 'toc'
    this.idToc=rai.id;
    this.ApiService.getOptionFind(endPoint,rai.id).subscribe(
      (data:any)=>{
        console.log('data toc ====>',data)
        this.idGobal = data
          this.step1 = data;
          const {Impactpays,Impactplat,Impactservice,...reste} = data
          data.Impactpays.map( (py:any)=> {
            this.tagsPays.push(py['pays'])
          })

          data.Impactplat.map( (pt:any)=> {
            this.tagsPlat.push(pt['Platform'])
          })

          data.Impactservice.map( (s:any)=> {
            this.tagsServi.push(s['service'])
          })
          let result = reste;
          result.pays =  this.tagsPays
          result.Platforme =  this.tagsPlat
          result.Service =  this.tagsServi
          console.log('result.tags',result);
          this.step1 = { ...result  };


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

  showModal1Detail(rai?:any): void {
    this.titleModal = "Detail de la RAI";
    this.isVisibleDetail = true;
  }


  handleCancel(): void {
    console.log('handleCancel',);
    this.isVisibleReservation = false;
    this.disabeldTIckToc = false
    localStorage.removeItem('hideDest');
    localStorage.removeItem('hideTranc');
    this.backgroundStep1 = false;
    this.backgroundStep2 = false;
    this.backgroundStep3 = false;
    this.step1 ={};
    this.step2 ={};
    this.step3 ={};
    this.step2Update = {};
    this.step3Update = {};
    this.numeroToc= '';
    this.IdToc = [];
    this.idToc =''
    this.IdTocFilnale = [];
    this.disableChamp = false;
    this.values =[];
  this.tagsPays = []
  this.tagsPlat = []
  this.tagsServi = []
  }

  get DisabledRAI(){
    if (this.step3.Rairecu  === "OUI" && this.step3.Rairecu) {
      this.cursor = 'pointer';
      return false
    }
    this.cursor = 'not-allowed';
    return true
  }

  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };
      img.onerror = error => {
        reject(error);
      };
      img.src = url;
    });
  }


  getSelect(event:any){
  console.log('event.target.value ==>', event)
  this.changePays.push(event)
  event = ""
  this.step1.Platforme = ""
    }

  getPlatforme(){
    let endPoint = "platform"
    this.ApiService.get(endPoint).subscribe(
      (response:any) => {
        this.listPlateforme = response;
        console.log('listPlateforme+++', this.listPlateforme);
      },
      (error:any) => {
        console.log('error',error);
      }
    );
  }

  getService(){
    let endPoint = "service"
    this.ApiService.get(endPoint).subscribe(
      (response:any) => {
        this.listService = response;
        console.log('listService+++', this.listService);
      },
      (error:any) => {
        console.log('error',error);
      }
    );
  }

  async createPDF(){
this.deleStorageAndClose();
    const pdfDefinition:any = {

      content: [
        {
          alignment: 'justify',
          columns: [
            {
              image: await this.getBase64ImageFromURL('../../../assets/Orangelogo.png'),
              width: 50,
              height: 50,
              padding: [ 0, 0, 40, 0 ]
            },
            {
              text: 'ENREGISTREMENT DU RAI',
              color:'#ff7900',
              fontSize: 30,
              fontweight: 600,
              alignment:'right'
            }
          ]
        },
        '\n\n',
        {
          columns:[
            {
              text: 'Rapport d???Analyse d???Incident',
              color:'#ff7900',
              fontSize: 20,
              fontweight: '900'
            }
          ]
        },
        '\n',
        {
          text:'NB : Il faut noter que toutes les heures du rapport sont en heure GMT.',
          fontSize: 15,
          fontweight: '600'
        },
        '\n',
        {
          style: 'tableExample',
          table: {
            widths: [200, 200],
            headerRows: 1,
            body: [
              [{text: 'PERIODE', style: 'tableHeader', colSpan: 2, alignment: 'center',fillColor:'#ff7900',with:'100%'}, {}],
              [{text: 'Date et heure de d??but', style: 'tableHeader',fillColor:'#f8ab67',with:'100%'}, {text: 'Date et heure de d??but', style: 'tableHeader',fillColor:'#f8ab67',with:'100%'}],
              [
                `${this.stepVIew.Datedebut} ${this.stepVIew.heurD}`,
                `${this.stepVIew.Datefin} ${this.stepVIew.heurF}`
              ]
            ]
          }
        },
        '\n\n',
        {
          style: 'tableExample',
          table: {
            widths: [150, 150, 150],
            headerRows: 1,
            body: [
              [{text: 'CRITICITE', style: 'tableHeader', colSpan: 3, alignment: 'center',fillColor:'#ff7900',with:'100%'}, {},{}],
              [{text: 'P1', style: 'tableHeader',fillColor:'#f8ab67',with:'100%'}, {text: 'P2', style: 'tableHeader',fillColor:'#f8ab05',with:'100%'},  {text: 'P3', style: 'tableHeader',fillColor:'#f80c05',with:'100%'}],
              [
                this.stepVIew.priorite === "P1" ? "X" : "  ",
                this.stepVIew.priorite === "P2" ? "X" : "  ",
                this.stepVIew.priorite === "P3" ? "X" : "  ",

              ]
            ]
          }
        },
        '\n\n',
        {
          style: 'tableExample',

          table: {
            widths: [150, 350],
            headerRows: 1,
            body: [
              [
                {text: 'IMPACT', style: 'tableHeader', colSpan: 2, alignment: 'center',fillColor:'#ff7900',with:'100%'},{}],
              [
                {text: 'Localisation', style: 'tableHeader',fillColor:'#f8ab67',with:'100%'},
                {text: 'P2', style: 'tableHeader',fillColor:'#f8ab05',with:'100%'}
              ],
              [
                {text: 'D??but de l???incident', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.Numero}`
              ],
              [
                {text: 'Impacts Plateformes', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.Platforme}`

              ],
              [
                {text: 'Impacts services', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.Service}`

              ],
              [
                {text: 'Priorit??', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.priorite}`
              ],
              [
                {text: 'Description de l???incident', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.Description}`
              ],
              [
                {text: 'Action r??tablissement Plan d\???action', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.tocpro[0]?.rai[0]?.Actionretablissement}`
              ],
              [
                {text: 'Fin de l???incident', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.Datedebut} ${this.stepVIew?.heurD}`
              ],
              [
                {text: 'Dur??e de l???incident', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.Datedebut} ${this.stepVIew?.heurD}`
              ],
              [
                {text: 'Statut actuel', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.tocpro[0]?.rai[0]?.status}`
              ],
            ]
          }
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        bigger: {
          fontSize: 15,
          italics: true
        }
      },
    }

    const pdf = pdfMake.createPdf(pdfDefinition)
    pdf.open();
  }

  deleStorageAndClose(){
    this.disabeldTIckToc = false
    localStorage.removeItem('hideDest');
    localStorage.removeItem('hideTranc');
    this.backgroundStep1 = false;
    this.backgroundStep2 = false;
    this.backgroundStep3 = false;
    this.step1 ={};
    this.step2 ={};
    this.step3 ={};
    this.step2Update = {};
    this.step3Update = {};
    this.numeroToc= '';
    this.IdToc = [];
    this.IdTocFilnale = [];
    this.disableChamp = false;
    this.values =[];
  }



  fileChangeRI(event:any) {
    if (event.target.files && event.target.files.length > 0) {
       let extensionFile = event.target.files[0].name.split('.').pop()
      this.step3.uploadedFileRI = event.target.files[0];
      console.log('FILE', this.step3.uploadedFileRI);

    }
  }

  fileChangeRAI(event:any) {
    if (event.target.files && event.target.files.length > 0) {
       let extensionFile = event.target.files[0].name.split('.').pop()
      this.step3.uploadedFileRAI = event.target.files[0];
      console.log('FILE', this.step3.uploadedFileRAI);

    }
  }

  getPays(){
    let endPoint = "pays"
    this.ApiService.get(endPoint).subscribe(
      (response:any) => {
        this.ListPays = response.sort((a: any, b: any) => {
          if (a.Libelle > b.Libelle) {
            return 11;
          } else if (a.Libelle < b.Libelle) {
            return -1;
          } else {
            return 0;
          }
        });;
        console.log('ListPays', this.ListPays);
      },
      (error:any) => {
        console.log('error',error);
      }
    );
  }

  showSuccess(msg:any) {
    this.toastr.success(msg);
  }

  showDanger(msg:any){
    this.toastr.error(msg);
  }

  onKeyAddNumber(event: any) {
    const rExp1 = new RegExp("^[A-Z]+$");
    const rExp2 = new RegExp("^[0-9]+$");
      let slice1 = event.target.value .slice(0,4)
      let slice2 = event.target.value .slice(4,5)
      let slice3 = event.target.value .slice(5)

      if ( event.target.value.length === 10) {

        if (rExp1.test(slice2) && rExp2.test(slice3) && rExp2.test(slice1)) {

          if ( event.target.value && event.target.value !== undefined
            && event.target.value !== null) {

              let data = {} as Typrobleme
              data.Numero = event.target.value;
              data.id = null;
              data.toctiket = null;

            this.values.push(data);
            console.log('this.values',this.values);
            this.numeroToc = "";
            return;
             }
        }else{
          this.toastr.error('Le format du ticket ne respect pas la norme');
          return
        }
      }
      else{
        this.toastr.error('Il faut un num??ro de ticket avec longueur de 10 caract??res');
        return
      }

  }



  remove(item:any,ind?:number){
    const index = this.values.indexOf(item);
    if (index > -1) {
      this.values.splice(index, 1);
      console.log('this.values delete',this.values);
    }
  }


  nextStep1(){
    localStorage.setItem('hideTranc', JSON.stringify(true));
    const hideDistinataire = JSON.parse(localStorage.getItem('hideDest') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');

    if (hideDistinataire && hideExpediteur && this.step1.pays &&  this.step1.priorite &&  this.step1.heurD
      && this.step1.Datedebut && this.step1.Datefin && this.step1.heurF && this.step1.heurD && this.step1.Datedebut
       && this.step1.Datedebut && this.step1.Description && this.step1.Service && this.step1.Platforme) {

      if (this.values.length < 0 ) {
        this.toastr.error('Renseigner le Ticket oceane SVP');
          return;
        }
      if (!this.step1.pays) {
        this.toastr.error('Selectionner le pays SVP');
        return;
        }

      if (!this.step1.priorite) {
        this.toastr.error('renseigner priorit?? SVP');
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

            if (!this.step1.Platforme) {
              this.toastr.error('Selectionner la plateforme SVP');
                      return;
                    }
          if (!this.step1.Service) {
            this.toastr.error('Selectionner le service SVP');
                    return;
                  }

          if (this.step1.heurF.slice(0,2) < this.step1.heurD.slice(0,2)) {
                this.toastr.error("Erreur sur la heure d'incident et la heure de r??tablissement");
                return;
              }

            if (new Date(this.step1.Datefin).getTime() < new Date(this.step1.Datedebut).getTime()) {
              this.toastr.error("Erreur sur la date d'incident et la date de r??tablissement");
              return;
            }

            console.log('data ==>', this.step1,this.values);

// return
            for (let index = 0; index < this.values.length; index++) {
              const element = this.values[index];
              let endPoint = 'tocticket';
              let data =
              {
                Numero: element
              }
              console.log('data ticket ocean ajout ==> etape1', element);

              this.ApiService.post(endPoint, data).subscribe(
                (res: any) => {
                  console.log('data res rai ticket ==> etape1', res);
                  this.showSuccess('La cr??ation du ticket est bien effectu??e');
                  this.loading = true;
                  // this.createRAi(res);
                  this.groundStep1 = false;
                  this.groundStep2 = true;
                  this.groundStep3 = false;
                  this.groundStep4 = false;

                  this.backgroundStep1 = true;
                  this.backgroundStep2 = false;

                },
                (error: any) => {
                  this.showDanger('La cr??ation de la RAI a ??chou??');
                  this.groundStep1 = false;
                  this.groundStep2 = true;
                  this.groundStep3 = false;
                  this.groundStep4 = false;

                  this.backgroundStep1 = true;
                  this.backgroundStep2 = false;

                }
              );
            }
    }
    else{
      this.showDanger('Les conditions ne sont pas remplies');
    this.groundStep1 = true;
    this.groundStep2 = false;
    this.groundStep3 = false;
    this.groundStep4 = false;

    this.backgroundStep1 = false;
    this.backgroundStep2 = false;

    }
  }

  ImpactTicket(toctiket_id?:Number){
    for (let index = 0; index < this.values.length; index++) {
      const element = this.values[index];
      let endPoint = 'tocticket';
      let data =
      {
        toctiket:toctiket_id,
        Numero: element
      }
      console.log('data ticket ocean ajout ==> etape1', element,toctiket_id);

      this.ApiService.post(endPoint, data).subscribe(
        (res: any) => {
          console.log('data res rai ticket ==> etape1', res);
          // this.showSuccess('La cr??ation du ticket incident est bien effectu??e');
        },
        (error: any) => {
          // this.showDanger('La cr??ation de la RAI a ??chou??');
        }
      );
    }
  }

  ImpactTicketUpdate(toctiket_id?:Number){
    // for (let index = 0; index < this.values.length; index++) {
      // const element = this.values[index];
      let endPoint = 'tocticket';
      let data =
      {
        toctiket:1,
        Numero: '2525T78750'
      }
      console.log('data ticket ocean ajout ==> etape1', data,toctiket_id);

      this.ApiService.put(endPoint,1, data).subscribe(
        (res: any) => {
          console.log('data res rai ticket ==> etape1', res);
          // this.showSuccess('La cr??ation du ticket incident est bien effectu??e');
        },
        (error: any) => {
          // this.showDanger('La cr??ation de la RAI a ??chou??');
        }
      );
    // }
  }

  ImpactPays(toctiket_id){
    for (let index = 0; index < this.step1.pays.length; index++) {
      const element = this.step1.pays[index];
      let endPoint = 'impact';
      let data =
      {
        toc:toctiket_id,
        pays: element
      }
      console.log('data pays-incident ajout ==> etape1', element);

      this.ApiService.post(endPoint, data).subscribe(
        (res: any) => {
          console.log('data res pays incident ==> etape1', res);
          // this.showSuccess('La liaison avec les pays est bien effectu??e');
        },
        (error: any) => {
          // this.showDanger('La liaison avec les pays a ??chou??');
        }
      );
    }
  }

  ImpactPaysUpdate(toctiket_id){
    for (let index = 0; index < this.step1.pays.length; index++) {
      const element = this.step1.pays[index];
      let endPoint = 'impact';
      let data =
      {
        toc:toctiket_id,
        pays: element
      }
      console.log('data pays-incident ajout ==> etape1', element,data);

      this.ApiService.put(endPoint, this.idToc,data).subscribe(
        (res: any) => {
          console.log('data res pays incident ==> etape1', res);
          // this.showSuccess('La liaison avec les pays est bien effectu??e');
        },
        (error: any) => {
          // this.showDanger('La liaison avec les pays a ??chou??');
        }
      );
    }
  }

  ImpactPlatform(toctiket_id){
    for (let index = 0; index < this.step1.Platforme.length; index++) {
      const element = this.step1.Platforme[index];
      let endPoint = 'impactpp';
      let data =
      {
        toc:toctiket_id,
        Platform: element
      }
      console.log('data platefome-incident ajout ==> etape1', element);

      this.ApiService.post(endPoint, data).subscribe(
        (res: any) => {
          console.log('data res platefome-incident  ==> etape1', res);
          // this.showSuccess('La cr??ation la platefome-incident incident est bien effectu??e');
        },
        (error: any) => {
          // this.showDanger('La cr??ation de la platefome-incident a ??chou??');
        }
      );
    }
  }

  ImpactPlatformUpdate(toctiket_id){
    for (let index = 0; index < this.step1.Platforme.length; index++) {
      const element = this.step1.Platforme[index];
      let endPoint = 'impactpp';
      let data =
      {
        toc:toctiket_id,
        Platform: element
      }
      console.log('data platefome-incident ajout ==> etape1', element,data);

      this.ApiService.put(endPoint,this.idToc, data).subscribe(
        (res: any) => {
          console.log('data res platefome-incident  ==> etape1', res);
          // this.showSuccess('La cr??ation la platefome-incident incident est bien effectu??e');
        },
        (error: any) => {
          // this.showDanger('La cr??ation de la platefome-incident a ??chou??');
        }
      );
    }
  }

  ImpactServce(toctiket_id){
    for (let index = 0; index < this.step1.Service.length; index++) {
      const element = this.step1.Service[index];
      let endPoint = 'impacts';
      let data =
      {
        toc:toctiket_id,
        service: element
      }
      console.log('data service-incident ajout ==> etape1', element);

      this.ApiService.post(endPoint, data).subscribe(
        (res: any) => {
          console.log('data res rai ticket ==> etape1', res);
          // this.showSuccess('La cr??ation du service-incident est bien effectu??e');
        },
        (error: any) => {
          // this.showDanger('La cr??ation du service-incident a ??chou??');
        }
      );
    }
  }

  ImpactServceUpdate(toctiket_id){
    for (let index = 0; index < this.step1.Service.length; index++) {
      const element = this.step1.Service[index];
      let endPoint = 'impacts';
      let data =
      {
        toc:toctiket_id,
        service: element
      }
      console.log('data service-incident ajout ==> etape1', element,data);

      this.ApiService.put(endPoint,this.idToc, data).subscribe(
        (res: any) => {
          console.log('data res rai ticket ==> etape1', res);
          // this.showSuccess('La cr??ation du service-incident est bien effectu??e');
        },
        (error: any) => {
          // this.showDanger('La cr??ation du service-incident a ??chou??');
        }
      );
    }
  }

  createRAi() {
    localStorage.setItem('hideTranc', JSON.stringify(true));
    const hideDistinataire = JSON.parse(localStorage.getItem('hideDest') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');

    if (hideDistinataire && hideExpediteur && this.step1.pays &&  this.step1.priorite &&  this.step1.heurD
      && this.step1.Datedebut && this.step1.Datefin && this.step1.heurF && this.step1.heurD && this.step1.Datedebut
       && this.step1.Datedebut && this.step1.Description && this.step1.Service && this.step1.Platforme) {

      if (this.values.length < 0 ) {
        this.toastr.error('Renseigner le Ticket oceane SVP');
          return;
        }
      if (!this.step1.pays) {
        this.toastr.error('Selectionner le pays SVP');
        return;
        }

      if (!this.step1.priorite) {
        this.toastr.error('renseigner priorit?? SVP');
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

            if (!this.step1.Platforme) {
              this.toastr.error('Selectionner la plateforme SVP');
                      return;
                    }
          if (!this.step1.Service) {
            this.toastr.error('Selectionner le service SVP');
                    return;
                  }

          if (this.step1.heurF.slice(0,2) < this.step1.heurD.slice(0,2)) {
                this.toastr.error("Erreur sur la heure d'incident et la heure de r??tablissement");
                return;
              }

            if (new Date(this.step1.Datefin).getTime() < new Date(this.step1.Datedebut).getTime()) {
              this.toastr.error("Erreur sur la date d'incident et la date de r??tablissement");
              return;
            }

      let endPoint = 'toc';
      let data = {
        priorite: this.step1.priorite,
        Datedebut: this.step1.Datedebut,
        heurD: this.step1.heurD,
        Datefin: this.step1.Datefin,
        heurF: this.step1.heurF,
        Description: this.step1.Description,
      };
    console.log('data rai create ticket ==>etape 1', data);
    this.loading = true;
    this.ApiService.post(endPoint, data)
      .subscribe(
        (res: any) => {
          console.log(' res creatte rai ticket incicent ==>etape 1', res);
          console.log('IdToc table de id ==> etape 1', this.IdToc);
          if (res) {
            this.IdToc=res.id;
            this.ImpactTicket(res.id);
            this.ImpactPays(res.id);
            this.ImpactPlatform(res.id);
            this.ImpactServce(res.id);
            this.showSuccess('La premi??re  ??tape valid??')
            this.loading = false;
            this.groundStep1 = false;
            this.groundStep2 = true;
            this.groundStep3 = false;
            this.groundStep4 = false;

            this.backgroundStep1 = true;
            this.backgroundStep2 = false;
          } else {
          console.log(' erreur creatte rai ticket incicent ==>etape 1', res);
            this.loading = false;
            this.showDanger('La premi??re  ??tape non valid??')
            this.groundStep1 = true;
            this.groundStep2 = false;
            this.groundStep3 = false;
            this.groundStep4 = false;

            this.backgroundStep1 = false;
            this.backgroundStep2 = false;
          }
        },
        (error: any) => {
          console.log(' erreur creatte rai ticket incicent ==>etape 1', error);
          this.loading = false;
          this.showDanger('La premi??re  ??tape non valid??')
          this.groundStep1 = true;
          this.groundStep2 = false;
          this.groundStep3 = false;
          this.groundStep4 = false;

          this.backgroundStep1 = false;
          this.backgroundStep2 = false;
        }
      );
    }
    else{
      this.showDanger('Les conditions ne sont pas remplies');
    this.groundStep1 = true;
    this.groundStep2 = false;
    this.groundStep3 = false;
    this.groundStep4 = false;

    this.backgroundStep1 = false;
    this.backgroundStep2 = false;

    }

  }

  updateStep1(){

    localStorage.setItem('hideTranc', JSON.stringify(true));
    const hideDistinataire = JSON.parse(localStorage.getItem('hideDest') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');

    if (hideDistinataire && hideExpediteur && this.step1.pays &&  this.step1.priorite &&  this.step1.heurD
      && this.step1.Datedebut && this.step1.Datefin && this.step1.heurF && this.step1.heurD && this.step1.Datedebut
       && this.step1.Datedebut && this.step1.Description && this.step1.Service && this.step1.Platforme) {

      if (this.values.length < 0 ) {
        this.toastr.error('Renseigner le Ticket oceane SVP');
          return;
        }
      if (!this.step1.pays) {
        this.toastr.error('Selectionner le pays SVP');
        return;
        }

      if (!this.step1.priorite) {
        this.toastr.error('renseigner priorit?? SVP');
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

            if (!this.step1.Platforme) {
              this.toastr.error('Selectionner la plateforme SVP');
                      return;
                    }
          if (!this.step1.Service) {
            this.toastr.error('Selectionner le service SVP');
                    return;
                  }

          if (this.step1.heurF.slice(0,2) < this.step1.heurD.slice(0,2)) {
                this.toastr.error("Erreur sur la heure d'incident et la heure de r??tablissement");
                return;
              }

            if (new Date(this.step1.Datefin).getTime() < new Date(this.step1.Datedebut).getTime()) {
              this.toastr.error("Erreur sur la date d'incident et la date de r??tablissement");
              return;
            }

      let endPoint = 'toc';
      let data = {
        priorite: this.step1.priorite,
        Datedebut: this.step1.Datedebut,
        heurD: this.step1.heurD,
        Datefin: this.step1.Datefin,
        heurF: this.step1.heurF,
        Description: this.step1.Description,
      };
    console.log('data rai create ticket ==>etape 1', data);
    this.loading = true;
    this.ApiService.put(endPoint, this.idToc, data)
      .subscribe(
        (res: any) => {
          console.log(' res creatte rai ticket incicent ==>etape 1', res);
          console.log('IdToc table de id ==> etape 1', this.IdToc);
          if (res) {
            this.IdToc=res.id;
            this.ImpactTicketUpdate(res.id);
            this.ImpactPaysUpdate(res.id);
            this.ImpactPlatformUpdate(res.id);
            this.ImpactServceUpdate(res.id);
            this.step2 =  {...this.step2Update}
            this.showSuccess('La update ??tape 1 valid??')
            this.loading = false;
            this.groundStep1 = false;
            this.groundStep2 = true;
            this.groundStep3 = false;
            this.groundStep4 = false;

            this.backgroundStep1 = true;
            this.backgroundStep2 = false;
          } else {
          console.log(' erreur creatte rai ticket incicent ==>etape 1', res);
            this.loading = false;
            this.showDanger('Update ??tape 1 non valid??')
            this.groundStep1 = true;
            this.groundStep2 = false;
            this.groundStep3 = false;
            this.groundStep4 = false;

            this.backgroundStep1 = false;
            this.backgroundStep2 = false;
          }
        },
        (error: any) => {
          console.log(' erreur creatte rai ticket incicent ==>etape 1', error);
          this.loading = false;
          this.showDanger('Update ??tape 1  non valid??')
          this.groundStep1 = true;
          this.groundStep2 = false;
          this.groundStep3 = false;
          this.groundStep4 = false;

          this.backgroundStep1 = false;
          this.backgroundStep2 = false;
        }
      );
    }
    else{
      this.showDanger('Les conditions ne sont pas remplies');
    this.groundStep1 = true;
    this.groundStep2 = false;
    this.groundStep3 = false;
    this.groundStep4 = false;

    this.backgroundStep1 = false;
    this.backgroundStep2 = false;

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
      Platforme: this.step1.Platforme,
      Service: this.step1.Service,
    };
    console.log('data rai create mise ?? jour', data , this.idTocStep1);
    this.loading = true;
    this.ApiService.put(endPoint,this.idTocStep1, data)
      .subscribe(
        (res: any) => {
          console.log('rai mise ?? jour', res);
          if (res) {
            this.IdTocUpdate = res.id;
            console.log('IdToc mise ?? jour', this.IdToc);
            this.showSuccess('La mise ?? jour de cette ??tape bien effectu??e ')
            this.loading = false;
             this.step2 =  {...this.step2Update}

          } else {
            console.log('erreur');
            this.loading = false;
            this.showDanger(' mise ?? jour de cette ??tape a ??chou??e')
          }
        },
        (error: any) => {
          this.loading = false;
        }
      );
  }


  nextStep2(){
    const hideDistinataire = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    const hideTrasaction = JSON.parse(localStorage.getItem('hideTranc') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');

    if (hideDistinataire && hideExpediteur && hideTrasaction && this.step2.Numerotocpro &&  this.step2.Porteur &&
      this.step2.typeproblem && this.IdToc != undefined && this.IdToc != null) {

      let rExp1 = new RegExp("^[A-Z]+$");
      let rExp2 = new RegExp("^[0-9]+$");
      let slice1 = this.step2.Numerotocpro.slice(0,4)
      let slice2 = this.step2.Numerotocpro.slice(4,5)
      let slice3 = this.step2.Numerotocpro.slice(5)

      if (!this.step2.Numerotocpro) {
        this.toastr.error('Renseigner le num??ro ticket probl??me SVP');
          return;
        }

      if (!this.step2.Porteur) {
        this.toastr.error('Selectionner le porteur SVP');
        return;
        }

      if (!this.step2.typeproblem) {
        this.toastr.error('Selectionner le type du probl??me SVP');
          return;
        }

        if (rExp1.test(slice2) === false && rExp2.test(slice3) === false && rExp2.test(slice1) === false) {
          this.toastr.error('Le format du ticket ne respect pas la norme');
          return
        }

        if (this.step2.Numerotocpro.length !== 10) {
          this.toastr.error('Il faut un num??ro de ticket avec longueur de 10 caract??res');
          return
        }
          let endPoint = 'tocprobleme';
          let data =
          {
            Numerotocpro: this.step2.Numerotocpro,
            toc:this.IdToc,
            typeproblem  :this.step2.typeproblem,
            Porteur: this.step2.Porteur,
          }
          console.log('data ticket  probleme ajout ==> etape2', data);
          this.loading1 = true;
          this.ApiService.post(endPoint, data).subscribe(
            (res: any) => {
              console.log('data res ticket probleme ==> etape2', res);
              this.showSuccess('La cr??ation bien effectu??e')
              this.IdTocFilnale = res.id
              console.log('IdTocFilnale table id ==> etape 2', this.IdTocFilnale);
              this.loading1 = false;

              this.groundStep1 = false;
              this.groundStep2 = false;
              this.groundStep4 = false;

              this.groundStep3 = true;

              this.backgroundStep2 = true;
              this.backgroundStep3 = false;

            },
            (error: any) => {
              this.showDanger('La cr??ation a ??chou??e');
              console.log('IdTocFilnale table id ==> etape 2 erreur');
              this.groundStep1 = false;
              this.groundStep2 = true;
              this.groundStep3 = false;
              this.backgroundStep2 = false;
              this.backgroundStep3 = false;
              this.groundStep4 = false;

            }
          );
        // }
    }
    else{
      this.showDanger('Les conditions ne sont pas remplies');
      this.groundStep1 = false;
      this.groundStep2 = true;
      this.groundStep3 = false;
      this.backgroundStep2 = false;
      this.backgroundStep3 = false;
      this.groundStep4 = false;

    }


  }

  updateStep2(){
      const hideDistinataire = JSON.parse(localStorage.getItem('hideExpe') || '{}');
      const hideTrasaction = JSON.parse(localStorage.getItem('hideTranc') || '{}');
      const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
      if (hideDistinataire && hideExpediteur && hideTrasaction && this.step2.Numerotocpro &&  this.step2.Porteur &&
        this.step2.typeproblem && this.IdToc != undefined) {
        this.step3 =  {...this.step3Update}

        let rExp1 = new RegExp("^[A-Z]+$");
        let rExp2 = new RegExp("^[0-9]+$");
        let slice1 = this.step2.Numerotocpro.slice(0,4)
        let slice2 = this.step2.Numerotocpro.slice(4,5)
        let slice3 = this.step2.Numerotocpro.slice(5)
        if (!this.step2.Numerotocpro) {
          this.toastr.error('Renseigner le num??ro ticket probl??me SVP');
            return;
          }

        if (!this.step2.Porteur) {
          this.toastr.error('Selectionner le porteur SVP');
          return;
          }

        if (!this.step2.typeproblem) {
          this.toastr.error('Selectionner le type du probl??me SVP');
            return;
          }

          if (rExp1.test(slice2) === false && rExp2.test(slice3) === false && rExp2.test(slice1) === false) {
            this.toastr.error('Le format du ticket ne respect pas la norme');
            return
          }

          if (this.step2.Numerotocpro.length !== 10) {
            this.toastr.error('Il faut un num??ro de ticket avec longueur de 10 caract??res');
            return
          }

          let endPoint = 'tocprobleme';
          let data =
          {
            Numerotocpro: this.step2.Numerotocpro,
            toc:this.idtocpro,
            typeproblem  :this.step2.typeproblem,
            Porteur: this.step2.Porteur,
          }
          console.log('data ticket probleme mise ?? jour', data);
          this.loading1 = true;
          this.ApiService.put(endPoint,this.idtocpro, data).subscribe(
            (res: any) => {

              console.log('data res ticket probleme', res);
              this.showSuccess('La mise ?? jour a bien ??t?? effectu??e')
              this.IdTocFilnaleUpdate = res.id
              console.log('IdTocFilnale', this.IdTocFilnale);
              this.loading1 = false;

              this.groundStep1 = false;
              this.groundStep2 = false;
              this.groundStep3 = true;
    this.groundStep4 = false;

    this.backgroundStep2 = true;
    this.backgroundStep3 = false;
            },
            (error: any) => {
              this.showDanger('La mise ?? jour a ??chou??e')
              this.groundStep1 = false;
              this.groundStep2 = true;
    this.groundStep4 = false;

              this.groundStep3 = false;
              this.backgroundStep2 = true;
              this.backgroundStep3 = false;
            }
          );
      }
      else{
      this.showDanger('Les conditions ne sont pas remplies');
      this.groundStep1 = false;
      this.groundStep2 = true;
    this.groundStep4 = false;

      this.groundStep3 = false;
      this.backgroundStep2 = true;
      this.backgroundStep3 = false;
      }

  }


  finalStep(){

    if (this.IdTocFilnale != undefined && this.IdTocFilnale != null) {

        // for (let index = 0; index < this.IdTocFilnale.length; index++) {
          // const element = this.IdTocFilnale[index];
          let endPoint = 'rai';
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
                  // Rootcause : this.step3.Rootcause,
                  // Statrootcause : this.step3.Statrootcause,
                  // Commentaire : this.step3.Commentaire,
                  // Typesolution : this.step3.Typesolution,
                  Actionretablissement : this.step3.Actionretablissement,
                  Datecritere : this.step3.Datecritere,
                  DateRept : this.step3.DateRept,
                  uploadedFileRI:this.step3.uploadedFile,
                }
        console.log('data create RAI ajout ==>etape 3', this.data,this.step3);
        // return
        this.loading2 = true;
        this.ApiService.post(endPoint, this.data).subscribe(
          (res: any) => {
            console.log('data res RAI data ajout ==> etape 3', res);
            this.loading2 = false;
            this.showSuccess('La cr??ation est bien  effectu??e')
            // this.deleStorageAndClose()
            this.handleCancel()
            this.getNumbTicket()
          },
          (error: any) => {
            this.loading2 = false;
            this.showDanger('La cr??ation bien effectu??')
          }
        );
    //  }
  }

  }

  finalStep2(){

    if (this.IdTocFilnale != undefined && this.IdTocFilnale != null) {

        // for (let index = 0; index < this.IdTocFilnale.length; index++) {
          // const element = this.IdTocFilnale[index];
          let endPoint = 'rai';
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
                  Commentaire : this.step3.Commentaire,
                  Typesolution : this.step3.Typesolution,
                  Datecritere : this.step3.Datecritere,
                  DateRept : this.step3.DateRept,
                  uploadedFileRAI:this.step3.uploadedFileRAI,
                  uploadedFileRI:this.step3.uploadedFileRI
                }
        console.log('data create RAI ajout ==>etape 3', this.data);
        this.loading2 = true;
        this.ApiService.post(endPoint, this.data).subscribe(
          (res: any) => {
            console.log('data res RAI data ajout ==> etape 3', res);
            this.loading2 = false;
            this.showSuccess('La cr??ation est bien  effectu??e')
            // this.deleStorageAndClose()
            this.handleCancel()
            this.getNumbTicket()
          },
          (error: any) => {
            this.loading2 = false;
            this.showDanger('La cr??ation bien effectu??')
          }
        );
    //  }
  }

  }

  editRAI(){
    if (this.IdTocFilnaleUpdate != undefined && this.IdTocFilnaleUpdate != null) {
        let endPoint = 'rai';
          this.data =
              {
                tocprobleme : this.idrai,
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
                DateRept : this.step3.DateRept,
                uploadedFile:this.step3.uploadedFile
              }
      console.log('data create RAI mise ?? jour', this.data);
      this.loading2 = true;
      this.ApiService.put(endPoint,this.idrai, this.data).subscribe(
        (res: any) => {
          console.log('data res RAI data mise ?? jour', res);
          this.loading2 = false;
          // this.router.navigate(['plan-action-rai']);
          localStorage.setItem('Numerotocpro', JSON.stringify(this.step2.Numerotocpro));
          this.showSuccess('La mise ?? jour est bien effectu??e')
          this.deleStorageAndClose()
          this.getNumbTicket()
        },
        (error: any) => {
          this.loading2 = false;
          this.showDanger('La mise ?? jour a echou??e')
        }
      );
  //  }
}

  }



  nexStep4(){
    this.groundStep1 = false;
    this.groundStep2 = false;
    this.groundStep3 = false;
    this.groundStep4= true;
    this.backgroundStep1 = true;
    this.backgroundStep3 = true;
    this.backgroundSTep4 = true;
    this.backgroundStep2 = true;
  }




  getNumbTicket(){
    let endPoint = "toc"
    this.SpinnerService.showSpinner();
      this.ApiService.get(endPoint).subscribe(
        (response:any) => {
          this.ListTickOcean = response
          this.SpinnerService.hideSpinner();
          console.log('ListTickOcean++ ///', response);
        },
        (error:any) => {
          console.log('error',error);
          this.SpinnerService.hideSpinner();
        }
      );
  }

  filterTicket(){
    console.log('event===>',this.searchToc);
    if (this.searchToc) {
       this.ListTickOcean.map( (el:any)=>{
        console.log('el===>', el,this.searchToc,this.searchToc.toLowerCase().includes(el.Numero.toLowerCase()), this.searchToc.toLowerCase());
        if (this.searchToc.includes(el.Numero)) {
           return this.NewListTickOcean.push(el)
        }
        this.NewListTickOcean =  [...this.ListTickOcean]
      })
    }else{
      this.NewListTickOcean =  [...this.ListTickOcean]
    }
  }

  dissabledChampR(event:any){
    console.log('event==>',event.target.value);
    if (event.target.value && event.target.value === "R??alis??") {
    this.dissabledR = false;
    return
    }
    else{
      this.dissabledR = true;
      return
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
          this.SpinnerService.hideSpinner()
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






  findView(rai:any){
    console.log('rai=====>', rai);
    let endPoint = 'toc'
    this.idToc=rai.id;
    this.ApiService.getOptionFind(endPoint,rai.id).subscribe(
      (data:any)=>{
        console.log('data toc ====>',data)
        this.idGobal = data
          this.stepVIew = data;
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


}
