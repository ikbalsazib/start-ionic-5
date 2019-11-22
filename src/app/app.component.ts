import {Component, OnDestroy, QueryList, ViewChild} from '@angular/core';

import {AlertController, MenuController, IonRouterOutlet, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy {

  backButtonEventSubscription: any;
  @ViewChild(IonRouterOutlet, {static: true}) routerOutlet: QueryList<IonRouterOutlet>;
  @ViewChild(Navigator, {static: true}) nav: Navigator;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private alertController: AlertController,
    private menuCtrl: MenuController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#7044FF');
      this.statusBar.styleLightContent();
      // Back Button..
      this.backButtonEvent();

      this.splashScreen.hide();
    });
  }

  backButtonEvent() {
    this.backButtonEventSubscription = this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/home/tabs/homepage', true) && this.router.url === '/home/tabs/homepage') {
        const alert = await this.alertController.create({
          header: 'Confirm!',
          message: 'Are you want to exit app?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'primary',
            }, {
              text: 'Exit',
              cssClass: 'danger',
              handler: () => {
                navigator['app'].exitApp();
              }
            }
          ]
        });

        await alert.present();
      }
    });
  }

  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     header: 'Confirm!',
  //     message: 'Are you want to exit app?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'primary',
  //         handler: (blash) => {console.log('Confirm Cancel'); }
  //       },
  //       {
  //         text: 'Exit',
  //         cssClass: 'danger',
  //         handler: () => {
  //           navigator["app"].exitApp();
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  ngOnDestroy() {
    this.backButtonEventSubscription.unsubscribe();
  }
}
