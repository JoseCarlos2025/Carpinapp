import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent {
  icon1Color = '#F07A4F';
  icon2Color = '#F07A4F';
  icon3Color = '#F07A4F';
  icon4Color = '#F07A4F';

  changeColor(icon: number) {
    switch (icon) {
      case 0:
        this.icon1Color = '#3EA893';
        this.icon2Color = '#F07A4F';
        this.icon3Color = '#F07A4F';
        this.icon4Color = '#F07A4F';
        break;
      case 1:
        this.icon1Color = '#F07A4F';
        this.icon2Color = '#3EA893';
        this.icon3Color = '#F07A4F';
        this.icon4Color = '#F07A4F';
        break;
      case 2:
        this.icon1Color = '#F07A4F';
        this.icon2Color = '#F07A4F';
        this.icon3Color = '#3EA893';
        this.icon4Color = '#F07A4F';
        break;
      case 3:
        this.icon1Color = '#F07A4F';
        this.icon2Color = '#F07A4F';
        this.icon3Color = '#F07A4F';
        this.icon4Color = '#3EA893';
        break;
    }
  }
}

