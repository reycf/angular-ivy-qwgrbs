import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {


  ['list','arrow-right','award','edit','save', 'corner-up-left', 'refresh-ccw', 'refresh-cw','trash-2', 'x', 'clock', 'check', 'download-cloud', 'x-circle', 'home', 'user', 'key', 'bookOpen', 'users', 'search', 'briefcase', 'file', 'clipboard', 'unlock', 'users', 'user-plus', 'info', 'help-circle', 'settings', 'plus', 'chevron-down','activity', 'calendar'].forEach(name => {
    this.matIconRegistry.addSvgIcon(
      name,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${name}.svg`)
    );
  })

}
}
