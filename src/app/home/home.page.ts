import { Component } from '@angular/core';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private mobileAccessibility: MobileAccessibility) {

  }
  ionViewWillEnter() {
    this.mobileAccessibility.isDarkerSystemColorsEnabled().then(isDarkerSystemColorsEnabled => {
      alert(`isDarkerSystemColorsEnabled :${isDarkerSystemColorsEnabled}`);
    }).catch(err => {
      alert(`Error: ${err}`);
    });
    this.mobileAccessibility.isTalkBackRunning().then(isTalkBackRunning => {
      alert(`isTalkBackRunning :${isTalkBackRunning}`);
    }).catch(err => {
      alert(`Error: ${err}`);
    });
    this.mobileAccessibility.isClosedCaptioningEnabled().then(isClosedCaptioningEnabled => {
      alert(`isClosedCaptioningEnabled :${isClosedCaptioningEnabled}`);
    }).catch(err => {
      alert(`Error: ${err}`);
    });
    this.mobileAccessibility.isInvertColorsEnabled().then(isInvertColorsEnabled => {
      alert(`isInvertColorsEnabled :${isInvertColorsEnabled}`);
    }).catch(err => {
      alert(`Error: ${err}`);
    });
  }
}
