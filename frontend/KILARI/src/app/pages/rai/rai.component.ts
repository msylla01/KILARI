import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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
import { RaiService } from 'src/app/services/rai.service';
// // pdfMake.vfs = pdfFronts.pdfFronts.vfs
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;// (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

// const pdfMake = require('pdfmake/build/pdfmake.js');
// const pdfFonts = require("pdfmake/build/vfs_fonts");
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import * as pdfMake from 'pdfmake/build/pdfmake';

// import * as pdfMake from 'pdfmake/build/pdfmake.js';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-rai',
  templateUrl: './rai.component.html',
  styleUrls: ['./rai.component.scss']
})
export class RaiComponent implements OnInit {
  PlatformeVar:any;
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

  stepVIew:any;
  listPays:any = [];
  listPlateforme:any = [];
  listPriorite:any = [];
  ListTickOcean:any = [];
  NewListTickOcean:any = [];
  values:any = [];

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
  disabeldTIckToc:boolean = false;

  groundStep1: any;
  groundStep2: any;
  groundStep3: any;

  background1: any;
  background2: any;
  background3: any;

  uploading = false;
  fileList: NzUploadFile[] = [];



  // Pays:any = [
  //   {id:1, value:"Côte d'ivoire"},
  //   {id:2, value:"Sénégal"},
  //   {id:3, value:"Togo"},
  //   {id:4, value:"Mail"}
  // ]

  StatusRAI:any = [
    {id:1, value:"Réalisé"},
    {id:2, value:"Planifié"},
    {id:3, value:"Annulé"},
    {id:4, value:"Reporté"},
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
    {id:2, value:"N/A"},
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

  constructor(private msg: NzMessageService,public ser : RaiService,private router: Router,private toastr: ToastrService,private modalService: NgbModal, private SpinnerService:SpinnerService,private ApiService:ApiService , private ToastService:ToastService) {}


  ngOnInit() {      


   this.getDimensionsByFilter(1)
    localStorage.removeItem('hideDest');
    localStorage.removeItem('hideTranc');

    this.getPays();
    // this.getPlateforme();
    this.getPriorite();
    this.getRAI();
    this.getPays();
    this.getNumbTicket();
    this.filterTicket();
    this.getPlatforme()
  }

   questions = [
      {id: 1, question: "Do you feel a connection to a higher source and have a sense of comfort knowing that you are part of something greater than yourself?", category: "Spiritual", subs: []},
      {id: 2, question: "Do you feel you are free of unhealthy behavior that impacts your overall well-being?", category: "Habits", subs: []},
      {id: 3, question: "Do you feel you have healthy and fulfilling relationships?", category: "Relationships", subs: []},
      {id: 4, question: "Do you feel you have a sense of purpose and that you have a positive outlook about yourself and life?", category: "Emotional Well-being", subs: []},
      {id: 5, question: "Do you feel you have a healthy diet and that you are fueling your body for optimal health? ", category: "Eating Habits ", subs: []},
      {id: 6, question: "Do you feel that you get enough rest and that your stress level is healthy?", category: "Relaxation ", subs: []},
      {id: 7, question: "Do you feel you get enough physical activity for optimal health?", category: "Exercise ", subs: []},
      {id: 8, question: "Do you feel you practice self-care and go to the doctor regularly?", category: "Medical Maintenance", subs: []},
      {id: 9, question: "Do you feel satisfied with your income and economic stability?", category: "Financial", subs: []},
      {id: 10, question: "Do you feel you do fun things and laugh enough in your life?", category: "Play", subs: []},
      {id: 11, question: "Do you feel you have a healthy sense of balance in this area of your life?", category: "Work-life Balance", subs: []},
      {id: 12, question: "Do you feel a sense of peace and contentment  in your home? ", category: "Home Environment", subs: []},
      {id: 13, question: "Do you feel that you are challenged and growing as a person?", category: "Intellectual Wellbeing", subs: []},
      {id: 14, question: "Do you feel content with what you see when you look in the mirror?", category: "Self-image", subs: []},
      {id: 15, question: "Do you feel engaged at work and a sense of fulfillment with your job?", category: "Work Satisfaction", subs: []}
];

 getDimensionsByFilter(id){
  let dt= this.questions.filter(x => x.id === id);
  console.log("holla",dt)
  
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




  /**
   * 
   * ###############################################""""" function boucle sur un tableau"
   */
fun1(){
  let tab = [1,2,3]
  let id_tock = 2
for (var val of tab) {

    let dt ={
      "toc": id_tock,
      "pays": val
  }
/**Tu peux trouver la fonction qui enregistre
 * 
 * this.ser.createImpact(dt).subscribe((res:any) => {
        console.log(' created successfully! Impact',res);
        
   })**/
} 
}
fun2(){
  let tab = [1,2,3]
  let id_tock = 2
for (var val of tab) {

    let dt ={
      "toc": id_tock,
      "service": val
  }
/**Tu peux trouver la fonction qui enregistre
 * 
 * this.ser.createImpact(dt).subscribe((res:any) => {
        console.log(' created successfully! Impact',res);
        
   })**/

} 
}


fun3(){
  let tab = [1,2,3]
  let id_tock = 2
for (var val of tab) {

    let dt ={
      "toc": id_tock,
      "platform": val
  }
/**Tu peux trouver la fonction qui enregistre.
 * Tu pourrais mettre ta fonction ici qui enregistre
 * 
 * 
 * this.ser.createImpact(dt).subscribe((res:any) => {
        console.log(' created successfully! Impact',res);
        
   })**/

} 
}
fun4(){
  let tab = [1,2,3]
  let id_tock = 2
for (var val of tab) {

    let dt ={
      "toc": id_tock,
      "tocticket": val
  }
/**Tu peux trouver la fonction qui enregistre
 * 
 * this.ser.createImpact(dt).subscribe((res:any) => {
        console.log(' created successfully! Impact',res);
        
   })**/

} 
}
/**
 * ############################################################ End Function
 */


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  getSelect(event:any){
console.log('event.target.value ==>', JSON.stringify(this.Platforme))
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
              text: 'Rapport d’Analyse d’Incident',
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
              [{text: 'Date et heure de début', style: 'tableHeader',fillColor:'#f8ab67',with:'100%'}, {text: 'Date et heure de début', style: 'tableHeader',fillColor:'#f8ab67',with:'100%'}],
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
                {text: 'Début de l’incident', style: 'tableHeader',fillColor:'#f8ab67'},
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
                {text: 'Priorité', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.priorite}`
              ],
              [
                {text: 'Description de l’incident', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.Description}`
              ],
              [
                {text: 'Action rétablissement Plan d\’action', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.tocpro[0]?.rai[0]?.Actionretablissement}`
              ],
              [
                {text: 'Fin de l’incident', style: 'tableHeader',fillColor:'#f8ab67'},
                `${this.stepVIew?.Datedebut} ${this.stepVIew?.heurD}`
              ],
              [
                {text: 'Durée de l’incident', style: 'tableHeader',fillColor:'#f8ab67'},
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
    this.modalRef.dismiss( 'Close click') ;
    localStorage.removeItem('hideDest');
    localStorage.removeItem('hideTranc');
    this.background1 = false;
    this.background2 = false;
    this.background3 = false;
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



  fileChange(event:any) {
    if (event.target.files && event.target.files.length > 0) {
       let extensionFile = event.target.files[0].name.split('.').pop()
      this.step3.uploadedFile = event.target.files[0];
      console.log('FILE', this.step3.uploadedFile);

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

      if ( event.target.value.length === 10 && this.disabeldTIckToc === false ) {

        if (rExp1.test(slice2) && rExp2.test(slice3) && rExp2.test(slice1)) {

          if ( event.target.value && event.target.value !== undefined
            && event.target.value !== null) {

            this.values.push(event.target.value);
            console.log('this.values',this.values);
            this.numeroToc = "";

            return;
             }
            else{
              return
              }
        }else{
          this.toastr.error('Le format du ticket ne respect pas la norme');
          return
        }
      }
      else
        if(event.target.value.length === 10 && this.disabeldTIckToc === true){
        console.log("test annulation d'ajout dans le champ",event.target.value , this.disabeldTIckToc )
        return
      }
      else{
        this.toastr.error('Il faut un numéro de ticket avec longueur de 10 caractères');
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

            if (!this.step1.Platforme) {
              this.toastr.error('Selectionner la plateforme SVP');
                      return;
                    }
          if (!this.step1.Service) {
            this.toastr.error('Selectionner le service SVP');
                    return;
                  }

          if (this.step1.heurF.slice(0,2) < this.step1.heurD.slice(0,2)) {
                this.toastr.error("Erreur sur la heure d'incident et la heure de rétablissement");
                return;
              }

            if (new Date(this.step1.Datefin).getTime() < new Date(this.step1.Datedebut).getTime()) {
              this.toastr.error("Erreur sur la date d'incident et la date de rétablissement");
              return;
            }

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
                  this.showSuccess('La création du ticket est bien effectuée');
                  this.loading = true;
                  this.createRAi(res);
                  this.groundStep1 = false;
                  this.groundStep2 = true;
                  this.groundStep3 = false;
                  this.background1 = true;
                  this.background2 = false;
                },
                (error: any) => {
                  this.showDanger('La création de la RAI a échoué');
                  this.groundStep1 = true;
                  this.groundStep2 = false;
                  this.groundStep3 = false;
                  this.background1 = false;
                  this.background2 = false;
                }
              );
            }
    }else{
      this.showDanger('Les conditions ne sont pas remplies');
      this.groundStep1 = true;
      this.groundStep2 = false;
      this.groundStep3 = false;
      this.background1 = false;
      this.background2 = false;
    }
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
      Platforme: this.step1.Platforme,
      Service: this.step1.Service,
    };
    console.log('data rai create ticket ==>etape 1', data);
    this.loading = true;
    this.ApiService.post(endPoint, data)
      .subscribe(
        (res: any) => {
          console.log(' res creatte rai ticket ==>etape 1', res);
          if (res) {
            this.IdToc.push(res.id);
            console.log('IdToc table de id ==> etape 1', this.IdToc);
            this.showSuccess('La première  étape validé')
            this.loading = false;
          } else {
            console.log('erreur');
            this.loading = false;
            this.showDanger('La première  étape non validé')
            this.groundStep1 = true;
            this.groundStep2 = false;
            this.groundStep3 = false;
            this.background1 = false;
            this.background2 = false;
          }
        },
        (error: any) => {
          this.loading = false;
          this.showDanger('La première  étape non validé')
          this.groundStep1 = true;
          this.groundStep2 = false;
          this.groundStep3 = false;
          this.background1 = false;
          this.background2 = false;
        }
      );
  }

  updateStep1(){
    localStorage.setItem('hideTranc', JSON.stringify(true));
    const hideDistinataire = JSON.parse(localStorage.getItem('hideDest') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideDistinataire && hideExpediteur && this.step1.pays &&  this.step1.priorite &&  this.step1.heurD
      && this.step1.Datedebut && this.step1.Datefin && this.step1.heurF && this.step1.heurD && this.step1.Datedebut && this.step1.Datedebut
      && this.step1.Description && this.step1.Service && this.step1.Platforme) {

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
          this.showSuccess('La mise à jour du numéro de ticket est bien effectuée');
          this.loading = true;

          this.groundStep1 = false;
          this.groundStep2 = true;
          this.groundStep3 = false;
          this.background1 = true;
          this.background2 = false;
        },
        (error: any) => {
          this.showDanger(`La mise à jour numéro du ticket est non effectuée.
          Roote cause: ${error}`);

          this.groundStep1 = false;
          this.groundStep2 = false;
          this.groundStep3 = false;
          this.background1 = false;
          this.background2 = false;
        }
      );
    }
    else{
      this.showDanger('Les conditions ne sont pas remplies');

      this.groundStep1 = false;
      this.groundStep2 = false;
      this.groundStep3 = false;
      this.background1 = false;
      this.background2 = false;
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
    console.log('data rai create mise à jour', data , this.idTocStep1);
    this.loading = true;
    this.ApiService.put(endPoint,this.idTocStep1, data)
      .subscribe(
        (res: any) => {
          console.log('rai mise à jour', res);
          if (res) {
            this.IdTocUpdate = res.id;
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
    this.disableChamp = true;
    }
  }



  nextStep2(){
    const hideDistinataire = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    const hideTrasaction = JSON.parse(localStorage.getItem('hideTranc') || '{}');
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideDistinataire && hideExpediteur && hideTrasaction && this.step2.Numerotocpro &&  this.step2.Porteur &&
      this.step2.typeproblem && this.IdToc != undefined && this.IdToc != null && this.IdToc.length > 0) {

      let rExp1 = new RegExp("^[A-Z]+$");
      let rExp2 = new RegExp("^[0-9]+$");
      let slice1 = this.step2.Numerotocpro.slice(0,4)
      let slice2 = this.step2.Numerotocpro.slice(4,5)
      let slice3 = this.step2.Numerotocpro.slice(5)

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

        if (rExp1.test(slice2) === false && rExp2.test(slice3) === false && rExp2.test(slice1) === false) {
          this.toastr.error('Le format du ticket ne respect pas la norme');
          return
        }

        if (this.step2.Numerotocpro.length !== 10) {
          this.toastr.error('Il faut un numéro de ticket avec longueur de 10 caractères');
          return
        }

        for (let index = 0; index < this.IdToc.length; index++) {
          const element = this.IdToc[index];
          let endPoint = 'tocprobleme';
          let data =
          {
            Numerotocpro: this.step2.Numerotocpro,
            toc:element,
            typeproblem  :this.step2.typeproblem,
            Porteur: this.step2.Porteur,
          }
          console.log('data ticket  probleme ajout ==> etape2', data);
          this.loading1 = true;
          this.ApiService.post(endPoint, data).subscribe(
            (res: any) => {
              console.log('data res ticket probleme ==> etape2', res);
              this.showSuccess('La création bien effectuée')
              this.IdTocFilnale.push(res.id)
              console.log('IdTocFilnale table id ==> etape 2', this.IdTocFilnale);
              this.loading1 = false;

              this.groundStep1 = false;
              this.groundStep2 = false;
              this.groundStep3 = true;
              this.background1 = true;
              this.background2 = true;
            },
            (error: any) => {
              this.showDanger('La création a échouée');
              console.log('IdTocFilnale table id ==> etape 2 erreur');
              this.groundStep1 = false;
              this.groundStep2 = true;
              this.groundStep3 = false;
              this.background1 = true;
              this.background2 = true;
            }
          );
        }
    }
    else{
      this.showDanger('Les conditions ne sont pas remplies');
      this.groundStep1 = false;
      this.groundStep2 = true;
      this.groundStep3 = false;
      this.background1 = true;
      this.background2 = true;

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

          if (rExp1.test(slice2) === false && rExp2.test(slice3) === false && rExp2.test(slice1) === false) {
            this.toastr.error('Le format du ticket ne respect pas la norme');
            return
          }

          if (this.step2.Numerotocpro.length !== 10) {
            this.toastr.error('Il faut un numéro de ticket avec longueur de 10 caractères');
            return
          }

          let endPoint = 'tocprobleme';
          let data =
          {
            Numerotocpro: this.step2.Numerotocpro,
            toc:this.IdTocUpdate,
            typeproblem  :this.step2.typeproblem,
            Porteur: this.step2.Porteur,
          }
          console.log('data ticket probleme mise à jour', data);
          this.loading1 = true;
          this.ApiService.put(endPoint,this.idtocpro, data).subscribe(
            (res: any) => {

              console.log('data res ticket probleme', res);
              this.showSuccess('La mise à jour a bien été effectuée')
              this.IdTocFilnaleUpdate = res.id
              console.log('IdTocFilnale', this.IdTocFilnale);
              this.loading1 = false;

              this.groundStep1 = false;
              this.groundStep2 = false;
              this.groundStep3 = true;
              this.background1 = true;
              this.background2 = true;
            },
            (error: any) => {
              this.showDanger('La mise à jour a échouée')
              this.groundStep1 = false;
              this.groundStep2 = true;
              this.groundStep3 = false;
              this.background1 = true;
              this.background2 = true;
            }
          );
      }
      else{
      this.showDanger('Les conditions ne sont pas remplies');
      this.groundStep1 = false;
      this.groundStep2 = true;
      this.groundStep3 = false;
      this.background1 = true;
      this.background2 = true;
      }

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
      this.disableChamp = true;
    }
  }



  finalStep(){
    if (this.IdTocFilnale != undefined && this.IdTocFilnale != null && this.IdTocFilnale.length > 0) {
        for (let index = 0; index < this.IdTocFilnale.length; index++) {
          const element = this.IdTocFilnale[index];
          let endPoint = 'rai';
            this.data =
                {
                  tocprobleme : element,
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
        console.log('data create RAI ajout ==>etape 3', this.data);
        this.loading2 = true;
        this.ApiService.post(endPoint, this.data).subscribe(
          (res: any) => {
            console.log('data res RAI data ajout ==> etape 3', res);
            this.loading2 = false;
            this.showSuccess('La création est bien  effectuée')
            this.deleStorageAndClose()
            this.getNumbTicket()
          },
          (error: any) => {
            this.loading2 = false;
            this.showDanger('La création bien effectué')
          }
        );
     }
  }

  }

  editRAI(){
    if (this.IdTocFilnaleUpdate != undefined && this.IdTocFilnaleUpdate != null) {
      // for (let index = 0; index < this.IdTocFilnale.length; index++) {
      //   const element = this.IdTocFilnale[index];
        let endPoint = 'rai';
          this.data =
              {
                tocprobleme : this.IdTocFilnaleUpdate,
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
      console.log('data create RAI mise à jour', this.data);
      this.loading2 = true;
      this.ApiService.put(endPoint,this.idrai, this.data).subscribe(
        (res: any) => {
          console.log('data res RAI data mise à jour', res);
          this.loading2 = false;
          // this.router.navigate(['plan-action-rai']);
          localStorage.setItem('Numerotocpro', JSON.stringify(this.step2.Numerotocpro));
          this.showSuccess('La mise à jour est bien effectuée')
          this.deleStorageAndClose()
          this.getNumbTicket()
        },
        (error: any) => {
          this.loading2 = false;
          this.showDanger('La mise à jour a echouée')
        }
      );
  //  }
}

  }

  viewStep3(){
  }


  getNumbTicket(){
    let endPoint = "tocticket"
    this.SpinnerService.showSpinner();
      this.ApiService.get(endPoint).subscribe(
        (response:any) => {
          this.ListTickOcean = response;
          this.SpinnerService.hideSpinner();
          console.log('ListTickOcean', this.ListTickOcean);
        },
        (error:any) => {
          console.log('error',error);
        }
      );
  }


  filterTicket(){
    console.log('event===>',this.searchToc);
    if (this.searchToc) {
      // this.NewListTickOcean = this.ListTickOcean.filter((val: any) => this.searchToc.toLowerCase().includes(val.Numero));
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
    if (event.target.value && event.target.value === "Réalisé") {
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

  // getPlateforme(){
  //   let endPoint = "platform"
  //     this.ApiService.get(endPoint).subscribe(
  //       (response:any) => {
  //         this.listPlateforme = response;
  //         console.log('listPlateforme==>', this.listPlateforme);
  //       },
  //       (error:any) => {
  //         console.log('error',error);
  //       }
  //     );
  // }





  findEdit(rai:any){
    console.log('rai=====>', rai, rai.id);
    let endPoint = 'toc'
    this.idToc=rai.id;
    this.ApiService.getOptionFind(endPoint,rai.id).subscribe(
      (data:any)=>{
        console.log('data toc ====>',data)
        this.idGobal = data
          this.step1 = data;
          // this.step1.disableChamp = rai.disableChamp
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

  findView(rai:any){
    console.log('rai=====>', rai);
    let endPoint = 'toc'
    this.idToc=rai.id;
    // this.idTocRai=rai.toc[0].id;
    // this.idTocProbleme=rai.toc[0].tocpro[0].id;
    this.ApiService.getOptionFind(endPoint,rai.id).subscribe(
      (data:any)=>{
        console.log('data toc ====>',data)
        this.idGobal = data
          this.stepVIew = data;
          // this.step1.disableChamp = rai.disableChamp
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

  open(content:any, rai?:any) {
    this.titleModal = "Création d'un RAI"
    if (rai != undefined) {
      this.disabeldTIckToc = true;
      console.log('++++rai edit',rai, this.disabeldTIckToc)
      this.numeroToc =  rai.Numero;
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
    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);

    });
  }

  openView(contentView:any, rai?:any) {
    this.titleModal = "Details d'un RAI"

    this.disableChamp = true;
    if (rai != undefined ) {
      console.log('++++rai view',rai)
      this.numeroToc =  rai.Numero;
      // rai.disableChamp = true
      this.findView(rai)
    }
    localStorage.setItem('hideDest', JSON.stringify(true));
    const hideExpediteur = JSON.parse(localStorage.getItem('hideExpe') || '{}');
    if (hideExpediteur) {
      this.groundStep1 = true;
      this.groundStep2 = false;
      this.groundStep3 = false;
    }
    this.modalRef =  this.modalService.open(contentView, {size  : 'xl'})
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
