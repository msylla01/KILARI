import { Component, OnInit } from '@angular/core';
// import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.scss']
})
export class GestionUserComponent implements OnInit {

  stepVIew:any
  Libelle:any
  subTitle:string;
  searchToc:any
  // modalRef: NgbModalRef | any;
  titleModal:string;
  ListUser:any= []
  ListRole:any = [];
  userCount:any = {};
  ConfirmPassword:string;
  disabledPWD:any =  false

  constructor(private msg: NzMessageService,private router: Router,private toastr: ToastrService, private SpinnerService:SpinnerService,private ApiService:ApiService , private ToastService:ToastService) { }

  ngOnInit() {
    // this.getRoles();
    // this.getUsers();
  }

  // showSuccess(msg:any) {
  //   this.toastr.success(msg);
  // }

  // showDanger(msg:any){
  //   this.toastr.error(msg);
  // }

  // show(){
  //   this.SpinnerService.showSpinner()
  // }

  // deleStorageAndClose(){
  //   this.modalRef.dismiss( 'Close click') ;
  //   this.disabledPWD = false;
  //   this.userCount = {};
  // }

  // getRoles(){
  //   let endPoint = "role"
  //   this.ApiService.get(endPoint).subscribe(
  //     (response:any) => {
  //       this.ListRole = response;
  //       console.log('ListRole', this.ListRole);
  //     },
  //     (error:any) => {
  //       console.log('error',error);
  //     }
  //   );
  // }

  // getUsers(){
  //   let endPoint = "user"
  //   this.ApiService.get(endPoint).subscribe(
  //     (response:any) => {
  //       this.ListUser = response;
  //       console.log('ListUser', this.ListUser);
  //       this.ListUser.forEach(element => {
  //       this.Libelle = this.ListRole.find(it=>it.id === element.role).Libelle
  //       });
  //       console.log('ListUser-----', this.Libelle);

  //     },
  //     (error:any) => {
  //       console.log('error',error);
  //     }
  //   );
  // }

  // openEdit(content:any, user:any) {
  //     this.titleModal = "Modification d'un utilisateur"
  //     this.subTitle= 'modification';
  //     this.disabledPWD= true;
  //     this.userCount = user
  //     console.log('user item', user, this.disabledPWD);
  //   this.modalRef =  this.modalService.open(content, {size  : 'xl'})
  //   this.modalRef.result.then(
  //     (result:any) => {
  //       console.log('oooook',result);

  //   });
  // }
  // open(content:any) {

  //   this.disabledPWD = false;
  //   this.titleModal = "Cr??ation d'un utilisateur"
  //   this.subTitle= 'cr??ation';
  //   this.modalRef =  this.modalService.open(content, {size  : 'xl'})
  //   this.modalRef.result.then(
  //     (result:any) => {
  //       console.log('oooook',result);

  //   });
  // }

  // openView(contentView:any, item?:any) {
  //   this.titleModal = "Details d'un utilisateur"
  //   this.stepVIew = {...item}
  //   this.modalRef =  this.modalService.open(contentView, {size  : 'xl'})
  //   this.modalRef.result.then(
  //     (result:any) => {
  //       console.log('oooook',result);
  //   });
  // }


  // // get findLibelle{
  // //   return
  // // }

  // submitValed(){
  //   if (this.disabledPWD === false ) {
  //     this.confirmSubmitCreateUser();
  //   }
  //   else{
  //     this.confirmSubmitUpdateUser();
  //   }

  // }

  // CreateeCount(){
  //   const endPoint = "user";

  //   if (!this.userCount.Prenom) {
  //     this.toastr.error('renseigner le pr??noms SVP');
  //       return;
  //     }

  //     if (!this.userCount.role) {
  //       this.toastr.error('Assigner un r??le SVP');
  //         return;
  //       }

  //     if (!this.userCount.password) {
  //     this.toastr.error('renseigner le mot de passe SVP');
  //         return;
  //       }

  //       if (this.userCount.password.length < 8) {
  //         this.toastr.error('Le mot de passe doit ??tre mininum 8 caract??res');
  //             return;
  //           }

  //       if (!this.userCount.Email) {
  //     this.toastr.error('renseigner l\'email SVP');
  //           return;
  //         }

  //       if (!this.userCount.Contact) {
  //     this.toastr.error('renseigner le contact SVP');
  //           return;
  //         }

  //         if (!this.userCount.Nom) {
  //     this.toastr.error('renseigner le nom SVP');
  //             return;
  //           }

  //           if (!this.userCount.username) {
  //             this.toastr.error('renseigner le username SVP');
  //                     return;
  //                   }

  //           if (this.userCount.Contact.length < 10 ) {
  //             this.toastr.error('Entrer un num??ro de 10 chiffres SVP');
  //                     return;
  //                   }


  //                   if (!this.ConfirmPassword ) {
  //                     this.toastr.error('Confirmer le mot de passe SVP');
  //                     return;
  //                   }

  //           if (this.userCount.password !== this.ConfirmPassword ) {
  //             this.toastr.error('Erreur sur la confirmation de mot de passe');
  //                     return;
  //                   }

  //   const data =
  //     {
  //       Email: this.userCount.Email,
  //       password: this.userCount.password,
  //       Nom: this.userCount.Nom,
  //       Prenom: this.userCount.Prenom,
  //       Contact: this.userCount.Contact,
  //       username: this.userCount.username,
  //       role: this.userCount.role,
  //     };
  //   console.log('data CreateeCount',data)
  //   // return;
  //   this.SpinnerService.showSpinner();
  //   this.ApiService.post(endPoint, data)
  //   .subscribe((res: any) => {
  //     console.log('user connecter create', res)
  //     if (res) {
  //       this.showSuccess("Cr??ation ??ffectu??e ");
  //       // this.showSuccess("Connectez vous avec vos information || Username && password");
  //     this.SpinnerService.hideSpinner();
  //       // this.userService.setUserSession(res);
  //       this.deleStorageAndClose()
  //       this.getUsers();

  //       this.userCount = {}
  //       // this.router.navigate(['/login-kilari']);
  //   // window.location.href = "/login-kilari";
  //     }else{
  //       console.log('erreur');
  //       this.showDanger("Cr??ation ??chou??e")
  //     }
  //   },
  //   (error:any)=>{
  //     this.showDanger("Cr??ation ??chou??e")
  //   }
  //   );
  // }

  // confirmSubmitCreateUser(typeuser?:any) {
  //   Swal.fire({
  //     text : "Voulez-vous poursuivre cette action ?",
  //     icon : 'warning',
  //     showCancelButton : true,
  //     confirmButtonText : "Oui",
  //     cancelButtonText : "Non",
  //     width : '350px',
  //   }).then((result) => {
  //     if (result.value) {
  //       this.CreateeCount();
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //     }
  //   });
  // }


  // UpdateCount(){
  //   const endPoint = "user";

  //   if (!this.userCount.Prenom) {
  //     this.toastr.error('renseigner le pr??noms SVP');
  //       return;
  //     }

  //     if (!this.userCount.role) {
  //       this.toastr.error('Assigner un r??le SVP');
  //         return;
  //       }

  //       if (!this.userCount.Email) {
  //     this.toastr.error('renseigner l\'email SVP');
  //           return;
  //         }

  //       if (!this.userCount.Contact) {
  //     this.toastr.error('renseigner le contact SVP');
  //           return;
  //         }

  //         if (!this.userCount.Nom) {
  //     this.toastr.error('renseigner le nom SVP');
  //             return;
  //           }

  //           if (!this.userCount.username) {
  //             this.toastr.error('renseigner le username SVP');
  //                     return;
  //                   }

  //           if (this.userCount.Contact.length < 10 ) {
  //             this.toastr.error('Entrer un num??ro de 10 chiffres SVP');
  //                     return;
  //                   }

  //   const data =
  //     {
  //       Email: this.userCount.Email,
  //       password: this.userCount.password,
  //       Nom: this.userCount.Nom,
  //       Prenom: this.userCount.Prenom,
  //       Contact: this.userCount.Contact,
  //       username: this.userCount.username,
  //       role: this.userCount.role,
  //     };
  //   console.log('data CreateeCount',data)
  //   // return;
  //   this.SpinnerService.showSpinner();
  //   this.ApiService.put(endPoint, this.userCount.id ,data)
  //   .subscribe((res: any) => {
  //     console.log('user connecter create', res)
  //     if (res) {
  //       this.showSuccess("Mise ?? jour bien ??ffectu??e ");
  //       // this.showSuccess("Connectez vous avec vos information || Username && password");
  //     this.SpinnerService.hideSpinner();
  //       // this.userService.setUserSession(res);
  //       this.deleStorageAndClose()
  //       this.getUsers();
  //       this.userCount = {}
  //       // this.router.navigate(['/login-kilari']);
  //   // window.location.href = "/login-kilari";
  //     }else{
  //       console.log('erreur');
  //       this.showDanger("Mise ?? jour ??chou??e")
  //     }
  //   },
  //   (error:any)=>{
  //     this.showDanger("Mise ?? jour ??chou??e")
  //   }
  //   );
  // }

  // confirmSubmitUpdateUser(typeuser?:any) {
  //   Swal.fire({
  //     text : "Voulez-vous poursuivre cette modification ?",
  //     icon : 'warning',
  //     showCancelButton : true,
  //     confirmButtonText : "Oui",
  //     cancelButtonText : "Non",
  //     width : '350px',
  //   }).then((result) => {
  //     if (result.value) {
  //       this.UpdateCount();
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //     }
  //   });
  // }



}
