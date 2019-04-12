import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test-webcreek';
  links = [
    {title: 'Main', active: true},
    {title: 'Packages', active: false},
    {title: 'Earnings', active: false},
    {title: 'Movements', active: false},
    {title: 'Settings', active: false}

  ];
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'dashboard-icon',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/path-3.svg'));
    iconRegistry.addSvgIcon(
        'indicators-icon',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Group 35.svg'));

    iconRegistry.addSvgIcon(
        'out-icon',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/sign-out.svg'));
  }
}
