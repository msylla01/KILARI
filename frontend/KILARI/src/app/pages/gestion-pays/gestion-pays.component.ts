import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerService } from '../../services/Spinner.service'
import { ApiService } from '../../services/api.service'
import { ToastService } from '../../services/toast.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import Swal from "sweetalert2";
import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';


import * as moment from "moment";
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { right } from '@popperjs/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';

// // pdfMake.vfs = pdfFronts.pdfFronts.vfs
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-gestion-pays',
  templateUrl: './gestion-pays.component.html',
  styleUrls: ['./gestion-pays.component.scss']
})
export class GestionPaysComponent implements OnInit {


  stepVIew:any
  Libelle:any
  subTitle:string;
  searchToc:any
  modalRef: NgbModalRef | any;
  titleModal:string;
  ListPays:any= []
  ListRole:any = [];
  elementPays:any = {};
  ConfirmPassword:string;
  disabledPWD:any =  false


  constructor(private msg: NzMessageService,private router: Router,private toastr: ToastrService,private modalService: NgbModal, private SpinnerService:SpinnerService,private ApiService:ApiService , private ToastService:ToastService) { }

  ngOnInit() {
    this.getPays()
  //  let  Platforme:any = [
  //   {id:1, value:"KAPPTIVATE"},
  //   {id:2, value:"GRAFANA"},
  //   {id:3, value:"PROMETHEUS"},
  //   {id:4, value:"CACTI"},
  //   {id:5, value:"OPEN NMS"},
  //   {id:6, value:"ISOS"},
  //   {id:7, value:"CENTREON"},
  //   {id:8, value:"OPC VITIB"},
  //   {id:9, value:"WAAAT"},
  //   {id:10, value:"WAAAT OPC"},
  //   {id:11, value:"MY ORANGE"},
  //   {id:12, value:"PADDOCK"},
  //   {id:13, value:"GAMELOFT"},
  //   {id:14, value:"GOOGLE RCS"},
  //   {id:15, value:"OMS"},
  //   {id:16, value:"MESSAGING PRO VOCAL"},
  //   {id:17, value:"MESSAGING PRO SMS"},
  //   {id:18, value:"IVR"},
  //   {id:19, value:"VOICE PRO (IVRAAS)"},
  //   {id:20, value:"MVA"},
  //   {id:21, value:"BONUS PROGRAM VOCAL"},
  //   {id:22, value:"BULK SMS"},
  //   {id:23, value:"ORANGE INFRA"},
  //   {id:24, value:"NOMAD"},
  //   {id:25, value:"MFM"},
  //   ]
  //       const endPoint = "service";

  //       Platforme.forEach(element => {
  //   const data =
  //   {
  //     Libelle: element.value
  //   };
  //   this.ApiService.post(endPoint, data).subscribe(
  //     (res: any) => {
  //       console.log('data res ticke pays ===>>>', res);
  //     },
  //     (error: any) => {
  //       this.showDanger('La création a échoué')
  //     }
  //   );
  //  });
  }



  showSuccess(msg:any) {
    this.toastr.success(msg);
  }

  showDanger(msg:any){
    this.toastr.error(msg);
  }

  show(){
    this.SpinnerService.showSpinner()
  }

  deleStorageAndClose(){
    this.modalRef.dismiss( 'Close click') ;
    this.disabledPWD = false;
    this.elementPays = {};
  }

  getPays(){
    let endPoint = "pays"
    this.ApiService.get(endPoint).subscribe(
      (response:any) => {
        this.ListPays = response;
        console.log('ListPays', this.ListPays);
      },
      (error:any) => {
        console.log('error',error);
      }
    );
  }


  openEdit(content:any, pays:any) {
      this.titleModal = "Modification d'un pays"
      this.subTitle= 'modification';
      this.disabledPWD= true;
      this.elementPays = {...pays};
      console.log('pays item', pays, this.disabledPWD);
    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });
  }


  open(content:any) {
    this.disabledPWD = false;
    this.titleModal = "Création d'un pays"
    this.subTitle= 'création';
    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });
  }



  openView(contentView:any, item?:any) {
    this.titleModal = "Details d'un pays"
    this.stepVIew = {...item}
    this.modalRef =  this.modalService.open(contentView, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });
  }


  // get findLibelle{
  //   return
  // }

  submitValed(){
    if (this.disabledPWD === false ) {
      this.confirmSubmitCreatePays();
    }
    else{
      this.confirmSubmitUpdatePays();
    }

  }

  CreateePays(){
    const endPoint = "pays";

    if (!this.elementPays.Libelle) {
      this.toastr.error('renseigner le libelle du pays SVP');
        return;
      }

    const data =
      {
        Libelle: this.elementPays.Libelle,
      };
    console.log('data Createepays',data)
    // return;
    this.SpinnerService.showSpinner();
    this.ApiService.post(endPoint, data)
    .subscribe((res: any) => {
      console.log('user pays create', res)
      if (res) {
        this.showSuccess("Création éffectuée ");
        // this.showSuccess("Connectez vous avec vos information || Username && password");
      this.SpinnerService.hideSpinner();
        // this.userService.setUserSession(res);
        this.deleStorageAndClose()
        this.getPays();

        this.elementPays = {}
        // this.router.navigate(['/login-kilari']);
    // window.location.href = "/login-kilari";
      }else{
        console.log('erreur');
        this.showDanger("Création échouée");
      this.SpinnerService.hideSpinner();

      }
    },
    (error:any)=>{
      this.showDanger("Création échouée");
      this.SpinnerService.hideSpinner();

    }
    );
  }

  confirmSubmitCreatePays(typeuser?:any) {
    Swal.fire({
      text : "Voulez-vous poursuivre cette action ?",
      icon : 'warning',
      showCancelButton : true,
      confirmButtonText : "Oui",
      cancelButtonText : "Non",
      width : '350px',
    }).then((result) => {
      if (result.value) {
        this.CreateePays();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }


  UpdatePays(){
    const endPoint = "pays";

    if (!this.elementPays.Libelle) {
      this.toastr.error('renseigner le prénoms SVP');
        return;
      }

    const data =
      {
        Libelle: this.elementPays.Libelle,
      };
    console.log('data CreateeCount',data)
    // return;
    this.SpinnerService.showSpinner();
    this.ApiService.put(endPoint, this.elementPays.id ,data)
    .subscribe((res: any) => {
      console.log('user connecter create', res)
      if (res) {
        this.showSuccess("Mise à jour bien éffectuée ");
        // this.showSuccess("Connectez vous avec vos information || Username && password");
      this.SpinnerService.hideSpinner();
        // this.userService.setUserSession(res);
        this.deleStorageAndClose()
        this.getPays();
        this.elementPays = {}
        // this.router.navigate(['/login-kilari']);
    // window.location.href = "/login-kilari";
      }else{
        console.log('erreur');
        this.showDanger("Mise à jour échouée")
      this.SpinnerService.hideSpinner();
      }
    },
    (error:any)=>{
      this.showDanger("Mise à jour échouée")
      this.SpinnerService.hideSpinner();
    }
    );
  }

  confirmSubmitUpdatePays(typeuser?:any) {
    Swal.fire({
      text : "Voulez-vous poursuivre cette modification ?",
      icon : 'warning',
      showCancelButton : true,
      confirmButtonText : "Oui",
      cancelButtonText : "Non",
      width : '350px',
    }).then((result) => {
      if (result.value) {
        this.UpdatePays();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }


deletPays(item:any){
  let endPoint = "pays"
  this.ApiService.delete(endPoint,item.id).subscribe(
    (response:any) => {
      console.log('pays==>',response);
    },
    (error:any) => {
      console.log('error',error);
    }
  );
}

confirmSubmitDeletPays(item:any) {
  Swal.fire({
    text : "Voulez-vous poursuivre cette suppression ?",
    icon : 'warning',
    showCancelButton : true,
    confirmButtonText : "Oui",
    cancelButtonText : "Non",
    width : '350px',
  }).then((result) => {
    if (result.value) {
      this.deletPays(item);
    } else if (result.dismiss === Swal.DismissReason.cancel) {
    }
  });
}

}


