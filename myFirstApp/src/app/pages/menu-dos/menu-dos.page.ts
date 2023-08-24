import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-menu-dos',
  templateUrl: './menu-dos.page.html',
  styleUrls: ['./menu-dos.page.scss'],
})
export class MenuDosPage implements OnInit {

  parametroIdMascota:number = 0;

  constructor(
                private activatedRoute:ActivatedRoute,
                private helperService:HelperService
                                
                ) { }

  ngOnInit() {
    this.parametroIdMascota = this.activatedRoute.snapshot.params['IdMascota'];
    console.log("Parametro menu dos ---> ", this.parametroIdMascota);
    
    console.log("servicio suma: ", this.helperService.sumar(10,20));
    
  }


}
