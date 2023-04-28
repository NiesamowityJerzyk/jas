import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EnvironmentInjector,
  Input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { ILink } from 'src/app/core/services/const.service';

@Component({
  standalone: true,
  selector: 'app-sidebar-mobile',
  templateUrl: './sidebar-mobile.component.html',
  styleUrls: ['./sidebar-mobile.component.scss'],
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
export class SidebarMobileComponent {
  @Input() public links!: ILink[];
  @Input() public nav!: HTMLElement;

  // @Output() navigate: EventEmitter<any> = new EventEmitter();
  // @Output() hideNav: EventEmitter<any> = new EventEmitter();
  public activeRoute: any;

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {}

  // navigate(el: ILink, nav: any){
  //   this.router.navigate([`${el.link}`]);
  //   nav.classList.remove('navActive');
  // }

  public hideNav(nav: HTMLElement): void {
    nav.classList.remove('navActive');
  }
}
