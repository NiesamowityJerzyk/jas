import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EnvironmentInjector,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterModule],
})
export class NavbarComponent {
  public showNavbar = false;
  constructor(
    public environmentInjector: EnvironmentInjector,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      var currentScrollpos = window.pageYOffset;

      if (currentScrollpos > 0) {
        this.showNavbar = true;
      } else {
        this.showNavbar = false;
      }
      this.cdr.detectChanges();

      // if (prevScrollpos > currentScrollpos) {
      //   document.getElementsByClassName('nav')[0].style.top = '0';
      // } else {
      //   document.getElementsByClassName('nav')[0].style.top = '-100px';
      // }
      prevScrollpos = currentScrollpos;
    };
  }
}
