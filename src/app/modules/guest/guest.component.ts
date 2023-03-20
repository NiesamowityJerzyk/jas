import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    IconComponent,
  ],
})
export class GuestComponent {}
