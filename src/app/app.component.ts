import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carpinapp';

  constructor(private router: Router) {}

  shouldShowMenu(): boolean {
    return !this.router.url.endsWith('/') && !this.router.url.endsWith('/singup');
  }
}
