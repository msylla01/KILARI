import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/Spinner.service';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service'
import { ToastService } from '../services/toast.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  modalRef: NgbModalRef | any;


  constructor(private userService: UserService,private router: Router,private toastr: ToastrService,private modalService: NgbModal, private SpinnerService:SpinnerService,private ApiService:ApiService , private ToastService:ToastService) { }

  ngOnInit() {
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
  }


  open(content:any, rai?:any) {
    this.modalRef =  this.modalService.open(content, {size  : 'lg'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });
  }

  openLock(contentLock:any, rai?:any) {
    this.modalRef =  this.modalService.open(contentLock, {size  : 'lg'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });
  }


  PwdForgot(){
    const endPoint = "";
    const data =
      {
        // email: this.user.email,
        // password: this.user.password
      };
    console.log('data PwdForgot',data)
    this.ApiService.post(endPoint, data)
    .subscribe((res: any) => {
      console.log('pwd PwdForgot', res)
      if (res) {
        this.showSuccess("Un message de confirmation vous a été envoyé par mail");
      this.SpinnerService.hideSpinner();

        // this.userService.setUserSession(res);
        // this.router.navigate(['accueil/welcome']);
      }else{
        console.log('erreur');
      this.showDanger("OPération échouée ! Saisissez les bonnes informations SVP")
      }
    },
    (error:any)=>{
      this.showDanger("Opération échouée ! Saisissez les bonnes informations SVP")
    }
    );
  }

  confirmSubmitPwdForgot(typeuser?:any) {
    Swal.fire({
      text : "Voulez-vous poursuivre cette action ?",
      icon : 'warning',
      showCancelButton : true,
      confirmButtonText : "Oui",
      cancelButtonText : "Non",
      width : '350px',
    }).then((result) => {
      if (result.value) {
        this.PwdForgot();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }


  CreateeCount(){
    const endPoint = "";
    const data =
      {
        // email: this.user.email,
        // password: this.user.password
      };
    console.log('data CreateeCount',data)
    this.SpinnerService.showSpinner();
    this.ApiService.post(endPoint, data)
    .subscribe((res: any) => {
      console.log('user connecter', res)
      if (res) {
        this.showSuccess("Connexion réussie");
      this.SpinnerService.hideSpinner();
        this.userService.setUserSession(res);
        this.router.navigate(['accueil/welcome']);
      }else{
        console.log('erreur');
      }
    },
    (error:any)=>{
      this.showDanger("Connexion échouée ! Saisissez les bonnes informations SVP")
    }
    );
  }



  login() {
    const endPoint = "";
    const data =
      {
        // email: this.user.email,
        // password: this.user.password
      };
    console.log('data',data)
    this.SpinnerService.showSpinner();
    this.ApiService.post(endPoint, data)
    .subscribe((res: any) => {
      console.log('user connecter', res)
      if (res) {
        this.showSuccess("Connexion réussie");
      this.SpinnerService.hideSpinner();

        this.userService.setUserSession(res);
        this.router.navigate(['accueil/welcome']);
      }else{
        console.log('erreur');
      }
    },
    (error:any)=>{
      this.showDanger("Connexion échouée ! Saisissez les bonnes informations SVP")
    }
    );
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
