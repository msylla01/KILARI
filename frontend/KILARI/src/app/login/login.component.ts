import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/Spinner.service';
// import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service'
import { ToastService } from '../services/toast.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // modalRef: NgbModalRef | any;
  ListUser:any = [];
  user:any = {};
  userCount:any = {};
  COnfirmPassword:any;

  constructor(public _location: Location,private userService: UserService,private router: Router,private toastr: ToastrService, private SpinnerService:SpinnerService,private ApiService:ApiService , private ToastService:ToastService) {
const url:any =  this.router.navigate(['/login-kilari'])

    if(url){
      this.userService.logout();
      window.location.href = "#";
      return;
    }

     let userConnecter = this.userService.getUserSession()
     if (!userConnecter){
      this.router.navigate(['/login-kilari']);;
      window.location.href = "#";
      return;
    }


   }


  refresh(): void {
    // this.deleStorageAndClose()
    // this.router.navigate(["/login-kilari"])
    // window.location.href = "/login-kilari";
    // this.router.navigateByUrl("/login-kilari", { skipLocationChange: true }).then(() => {
    //   this.router.navigate([decodeURI(this._location.path())]);
    // });
  }


  ngOnInit() {
    this.getUsers();

  //   const Platforme:any = [
  //     {id:1, value:"VITIB"},
  //     {id:2, value:"KM4"},
  //     {id:3, value:"OTN"},
  //     {id:4, value:"OSN"},
  //     {id:5, value:"OSL"},
  //     {id:6, value:"ONE"},
  //     {id:7, value:"OML"},
  //     {id:8, value:"OMG"},
  //     {id:9, value:"OLB"},
  //     {id:10, value:"OJO"},
  //     {id:11, value:"OGN"},
  //     {id:12, value:"OGB"},
  //     {id:13, value:"OCM"},
  //     {id:14, value:"OCI"},
  //     {id:15, value:"OCF"},
  //     {id:16, value:"OCD"},
  //     {id:16, value:"OBW"},
  //     {id:17, value:"OBF"},
  //     {id:18, value:"ALL"},
  //   ]
  //   Platforme.forEach(element => {

  //   const endPoint = "pays";
  //   const data =
  //   {
  //     Libelle:element.value
  //     // role: 3,
  //     // Nom: 'Mohamed',
  //     // Prenom :'sylle',
  //     // // Poste :
  //     // // Rang:
  //     // // Pictur
  //     // Email:'narcisse@gestion.com',
  //     // Contact :'0578898684',
  //     // username:'sylla',
  //     // password : 'sylla'
  //     // // Statut =

  //   };
  //   this.ApiService.post(endPoint, data).subscribe(
  //     (res: any) => {
  //       console.log('data res ticket probleme pays', res);
  //     },
  //     (error: any) => {
  //       this.showDanger('La cr??ation a ??chou??')
  //     }
  //   );
  // }
  //   );

  }

  showSuccess(msg:any) {
    this.toastr.success(msg);
  }

  showDanger(msg:any){
    this.toastr.error(msg);
  }

  // show(){
  //   this.SpinnerService.showSpinner()
  // }

  // deleStorageAndClose(){
  //   this.modalRef.dismiss( 'Close click') ;
  // }


  open(content?:any, rai?:any) {
    // this.modalRef =  this.modalService.open(content, {size  : 'lg'})
    // this.modalRef.result.then(
    //   (result:any) => {
    //     console.log('oooook',result);
    // });
  }

  openLock(contentLock?:any, rai?:any) {
    // this.modalRef =  this.modalService.open(contentLock, {size  : 'lg'})
    // this.modalRef.result.then(
    //   (result:any) => {
    //     console.log('oooook',result);
    // });
  }


  // PwdForgot(){
  //   const endPoint = "";
  //   const data =
  //     {
  //       // email: this.user.email,
  //       // password: this.user.password
  //     };
  //   console.log('data PwdForgot',data)
  //   this.ApiService.post(endPoint, data)
  //   .subscribe((res: any) => {
  //     console.log('pwd PwdForgot', res)
  //     if (res) {
  //       this.showSuccess("Un message de confirmation vous a ??t?? envoy?? par mail");
  //     this.SpinnerService.hideSpinner();

  //       // this.userService.setUserSession(res);
  //       // this.router.navigate(['accueil/welcome']);
  //     }else{
  //       console.log('erreur');
  //     this.showDanger("OP??ration ??chou??e ! Saisissez les bonnes informations SVP")
  //     }
  //   },
  //   (error:any)=>{
  //     this.showDanger("Op??ration ??chou??e ! Saisissez les bonnes informations SVP")
  //   }
  //   );
  // }

  // confirmSubmitPwdForgot(typeuser?:any) {
  //   Swal.fire({
  //     text : "Voulez-vous poursuivre cette action ?",
  //     icon : 'warning',
  //     showCancelButton : true,
  //     confirmButtonText : "Oui",
  //     cancelButtonText : "Non",
  //     width : '350px',
  //   }).then((result) => {
  //     if (result.value) {
  //       this.PwdForgot();
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //     }
  //   });
  // }


  // CreateeCount(){
  //   const endPoint = "user";

  //   if (!this.userCount.Prenom) {
  //     this.toastr.error('renseigner le pr??noms SVP');
  //       return;
  //     }

  //     if (!this.userCount.password) {
  //     this.toastr.error('renseigner le mot de passe SVP');
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


  //                   if (!this.COnfirmPassword ) {
  //                     this.toastr.error('Confirmer le mot de passe SVP');
  //                     return;
  //                   }

  //           if (this.userCount.password !== this.COnfirmPassword ) {
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
  //       role: 5,
  //     };
  //   console.log('data CreateeCount',data)
  //   this.SpinnerService.showSpinner();
  //   this.ApiService.post(endPoint, data)
  //   .subscribe((res: any) => {
  //     console.log('user connecter create', res)
  //     if (res) {
  //       this.showSuccess("Connexion r??ussie");
  //       this.showSuccess("Connectez vous avec vos information || Username && password");
  //     this.SpinnerService.hideSpinner();
  //       // this.userService.setUserSession(res);
  //       this.deleStorageAndClose()
  //       this.router.navigate(['/login-kilari']);
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


  getUsers(){
    let endPoint = "user"
    this.ApiService.get(endPoint).subscribe(
      (response:any) => {
        this.ListUser = response;
        console.log('ListUser', this.ListUser);
      },
      (error:any) => {
        console.log('error',error);
      }
    );
  }

  login() {
    // const endPoint = "user";
    const user = this.ListUser.find( (el:any)=>{
      return el.username === this.user.username && el.password === this.user.password
    })
    console.log('user',user);
      this.SpinnerService.showSpinner();
    if(user){
      this.showSuccess("Connexion r??ussie");
      this.SpinnerService.hideSpinner();
      this.userService.setUserSession(user);
      this.router.navigate(["tableau-de-bord"])
    }else{
      this.showDanger("Connexion ??chou??e ! Saisissez les bonnes informations SVP || Mot de passe/identifiant")
      this.SpinnerService.hideSpinner();
    }
  }




  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

}
