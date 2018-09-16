import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageViewerController } from "ionic-img-viewer";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [0, 1, 2, 3, 4, 5];
  constructor(public navCtrl: NavController, public imageViewerCtrl: ImageViewerController) {

  }
  onClick(imageToView) {
    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }
}
