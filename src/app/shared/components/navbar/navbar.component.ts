import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EnvironmentInjector,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { ConstsService, ILink } from 'src/app/core/services/const.service';
import { SidebarMobileComponent } from '../sidebar-mobile/sidebar-mobile.component';
@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule,
    IconComponent,
    SidebarMobileComponent,
  ],
})
export class NavbarComponent {
  public showNavbar = false;
  public links!: ILink[];
  constructor(
    public environmentInjector: EnvironmentInjector,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private constService: ConstsService
  ) {}

  ngOnInit() {
    this.links = this.constService.navigationLinks;

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

  public showNav(nav: HTMLElement): void {
    nav.classList.add('navActive');
  }
}
