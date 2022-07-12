import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerService } from '../../services/Spinner.service'
import { ApiService } from '../../services/api.service'
import { ToastService } from '../../services/toast.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Bqt',
  templateUrl: './Bqt.component.html',
  styleUrls: ['./Bqt.component.scss']
})
export class BqtComponent implements OnInit {

  search:any;
  modalRef: NgbModalRef | any;
  loading:boolean = true
  shoEdit:boolean =false;
  elementBQT:any = {};
  ListBQT:any = [];
  disableChamp:boolean = false;
  filteredItems:any = [];
  IdBQT:any;
  filzChange: any;

  constructor(private router: Router,private toastr: ToastrService,private modalService: NgbModal, private SpinnerService:SpinnerService,private ApiService:ApiService , private ToastService:ToastService) { }

  ngOnInit() {
    this.getAllBQT();
  }

  deleStorageAndClose(){
    this.modalRef.dismiss('Close click') ;
  }

  showSuccess(msg:any) {
    this.toastr.success(msg);
  }

  showDanger(msg:any){
    this.toastr.error(msg);
  }
  Filechange(event:any){
    
    this.elementBQT.uploadedFilePword = event.target.file[0]
    let varr = this.elementBQT.uploadedFilePword

    console.log('File Varrr', varr)
  }
  getAllBQT(){
    let endPoint = "bqt"
    this.SpinnerService.showSpinner()
    this.ApiService.get(endPoint).subscribe(
      (response:any) => {
        this.ListBQT = response;
        console.log('ListBQT', this.ListBQT);
    this.SpinnerService.hideSpinner()

      },
      (error:any) => {
        console.log('error',error);
      }
    );
  }


  open(content:any, rai?:any) {
    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });
  }


  openEdit(content:any, bqt?:any) {
    this.shoEdit =true;

    this.IdBQT =  bqt.id
    this.elementBQT = {...bqt}
    console.log('this.elementBQT edit',this.elementBQT );

    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });
  }



  ViewBQT(content:any, bqt?:any){
    this.disableChamp = true;
    this.IdBQT =  bqt.id
    this.elementBQT = {...bqt}
    console.log('this.elementBQT view',this.elementBQT );

    this.modalRef =  this.modalService.open(content, {size  : 'xl'})
    this.modalRef.result.then(
      (result:any) => {
        console.log('oooook',result);
    });
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
    let path1 ="http://127.0.0.1:8000/upload/Uploaded%20Files/"
    var path = "C:\\fakepath\\abc.pdf";
    var array = path.split("\\");
    console.log('ttttt',array[array.length-1]);
    let varrr = this.elementBQT.uploadedFilePword
    let varrrr = varrr.replace('C:\\fakepath\\','')
    console.log(varrr)
    let data =
    {
      Libelle: this.elementBQT.Libelle,
      Status: this.elementBQT.Status,
      datebqt: this.elementBQT.datebqt,
      ComptRendus: this.elementBQT.ComptRendus,
      uploadedFilePword: array[array.length-1].toString()
    }

    console.log('data bqt ajout', data,endPoint);
this.loading = false
    this.ApiService.post(endPoint, data).subscribe(
      (res: any) => {
        console.log('data res bqt', res);
        this.deleStorageAndClose();
        this.showSuccess('La création du BQT bien effectuée');
        this.router.navigate(['plan-action-bqt']);
        this.getAllBQT();
        this.elementBQT = {};
        this.loading = true;
      },
      (error: any) => {
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
    }

    console.log('data bqt ajout', data,endPoint);
this.loading = false;
    this.ApiService.put(endPoint, this.IdBQT ,data).subscribe(
      (res: any) => {
        console.log('data res bqt', res);
        this.showSuccess('La mise à jour de la BQT bien effectuée');
        this.deleStorageAndClose();
        this.getAllBQT();
        this.loading = true;
      },
      (error: any) => {
        this.showDanger('La mise à jour de la bqt non effectuée');
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


  assignCopy(){
    this.filteredItems = Object.assign([], this.ListBQT);
 }
 filterItem(value:any){
   console.log('value===>event',value.target);

    if(!value.target){
        this.assignCopy();
    } //when nothing has typed
    this.filteredItems = Object.assign([], this.ListBQT).filter(
       (item:any) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 }
//  this.assignCopy();//when you fetch collection from server.

}
