import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, OnDestroy {

  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;




  arrayMenu:any[]=[];









  constructor(private router:Router, private animationCtrl: AnimationController) { }




    cargarMenu(){
      this.arrayMenu.push
      (
        {
          id:1,
          titulo:"Menú uno",
          icono:"car-sport-outline",
          url:"menu-uno",
          disabled:true
        },
        {
          id:2,
          titulo:"Menú dos",
          icono:"airplane",
          url:"menu-dos"
        }
      )
    }




  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-card"))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }



  play(){
    this.animation.play();
  }


  pause(){
    this.animation.pause();
  }

  stop(){
    this.animation.stop();
  }



  ngOnDestroy(): void {
    console.log("Destruyendo la vista");
  }

  ngOnInit() {
    console.log("inicio del componente");
    this.cargarMenu();
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
    this.router.navigateByUrl("menu-dos");
  }
}
