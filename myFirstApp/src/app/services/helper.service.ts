import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private alertService:AlertController) { }

  sumar(n1:number, n2:number){
    var result = n1 + n2;
    return result;
  }

  async showAlert(msg:string, title:string){
    var alert = await this.alertService.create({cssClass:"alertClass",message:msg,header:title,buttons:['Aceptar']});
    await alert.present();
    return alert;
  }

  async showConfir(message:string,btn_confirmar:string,btn_cancelar:string){
    let promise = new Promise<boolean>(async (resolve,reject)=>{
      var alert = await this.alertService.create({cssClass:"",message:message, buttons:[
    {
      text:btn_confirmar,
      handler:() =>{
        resolve(true);
      }

    },
    {
      text:btn_cancelar,
      role: 'cancel',
      handler: () => {
        resolve(false);
      }
    }
    


  ]})
  await alert.present();
})
return promise;
}}
    
