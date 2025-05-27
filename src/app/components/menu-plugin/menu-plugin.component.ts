import { ChangeDetectorRef, Component, inject, TemplateRef} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ElementosMenu } from 'src/app/utils/json/ElementosMenu';

@Component({
  selector: 'app-menu-plugin',
  templateUrl: './menu-plugin.component.html',
  styleUrls: ['./menu-plugin.component.scss'],
})
export class MenuPluginComponent {
  private router = inject(Router);
  EM = ElementosMenu;
  year = (new Date()).getFullYear();
  btnmenu = true;
  show = false;
  classText = 'label-itemOFF';

  administrator = false;
  assesor = false;
  director = false;

  currentRouteUrl: any;
  Item_1!: string;
  Item_2!: string;
  Item_3!: string;
  Item_4!: string;
  Item_5!: string;
  Item_6!: string;
  Item_7!: string;
  Item_8!: string;
  Item_9!: string;
  Item_10!: string;
  Item_11!: string;
  Item_12!: string;
  Item_13!: string;
  Item_14!: string;


  constructor() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRouteUrl = event.url;
        this.isMenuItemIsActive();
      });
  }

  closeSidenav() {
    if (this.btnmenu == true) {
      this.classText = 'label-item';
      this.btnmenu = false;
    } else {
      this.btnmenu = true;
      this.classText = 'label-itemOFF';
    }
  }

  goMenu(): void {}


  logout(): void {
    console.log('Salir');
    this.router.navigate(["/"]);
  }



  isMenuItemIsActive(): void {
    this.show = true;
    switch (this.currentRouteUrl) {
      case '/menu/dashboard':
        this.administrator = true;
        this.main();
      break;
      case '/menu/gestion-usuarios':
        this.administrator = true;
        this.usuarios();
      break;
      case '/menu/gestion-proyectos':
        this.administrator = true;
        this.proyectos();
      break;
    }
  }

  ItemsOFF(){
    this.Item_1 = 'ItemOFF'; this.Item_2 = 'ItemOFF'; this.Item_3 = 'ItemOFF'; this.Item_4 = 'ItemOFF'; this.Item_5 = 'ItemOFF';
    this.Item_6 = 'ItemOFF'; this.Item_7 = 'ItemOFF'; this.Item_8 = 'ItemOFF'; this.Item_9 = 'ItemOFF'; this.Item_10 = 'ItemOFF';
    this.Item_11 = 'ItemOFF'; this.Item_12 = 'ItemOFF'; this.Item_13 = 'ItemOFF'; this.Item_14 = 'ItemOFF';
  }

  main() {
    {
      this.router.navigate(['/menu/SolicitudesDeCitas']);
      this.ItemsOFF();
      this.Item_1 = 'ItemON';
    }
  }
  usuarios() {
    {
      this.router.navigate(['/menu/gestion-usuarios']);
      this.ItemsOFF();
      this.Item_3 = 'ItemON';
    }
  }
  proyectos() {
    {
      this.router.navigate(['/menu/gestion-proyectos']);
      this.ItemsOFF();
      this.Item_2 = 'ItemON';
    }
  }


} 
