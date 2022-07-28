import { Pipe, PipeTransform } from '@angular/core';
import { ApiService } from '../services/api.service'

@Pipe({
  name: 'findElement'
})
export class FindElementPipe implements PipeTransform {
    findPays:any

  constructor(private ApiService:ApiService){}

  transform(value: any, args?: any): any {
    let endPoint = 'pays'
    this.ApiService.getOptionFind(endPoint,value).subscribe(
      (data:any)=>{
        console.log('data toc ====>',data)
            return this.findPays = data.Libelle
        });

        // return this.findPays;
  }

}
