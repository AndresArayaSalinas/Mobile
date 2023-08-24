import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonCard, NavController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, OnDestroy {

  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  private animation!: Animation;




menuArray:Menu[]=[];




  constructor(private router:Router, private animationCtrl: AnimationController, private nav:NavController) { }


cargarMenu(){
  this.menuArray.push
  (
    {
      id:1,
      nombreMenu:"Menú uno",
      url:"123456/menu-uno",
      icono:"airplane"
    },
    {
      id:2,
      nombreMenu:"Menú Dos",
      url:"menu-dos/987654",
      icono:"alarm-outline"
    }
  );
}











  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }
                                                                                                                /* Todo este código desde Constructor hasta stop es para crear una animación para un botón 
                                                                                                                .addElement(document.querySelectorAll("ion-card")) esto permite que todas las "ion card" ejecuten la animación*/
  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }



  
  ngOnDestroy(): void {
    console.log("Destruyendo la vista");
  }

  ngOnInit() {
    this.cargarMenu();
    console.log("array menu", this.menuArray);
    
    console.log("inicio del componente");
  }

  ionViewWillEnter(){
    console.log("Entrando a la vista");
  }

  ionViewDidEnter(){
    console.log("Vista cargada");
  }

  ionViewWillLeave(){
    console.log("Abandonando la vista");
  }

  ionViewDidLeave(){
    console.log("Abandonó la vista");
  }




  logOut(){
    this.router.navigateByUrl("login");
  }


  menuUno(){
    var parametroN1 = 123456;
    this.router.navigateByUrl(parametroN1 + "/menu-uno");
  }


  menuDos(){
    var parIdMascota = 321;
    this.nav.navigateForward("menu-dos/" + parIdMascota );

  }

}
