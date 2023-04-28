import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';

@Component({
  standalone: true,
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, IconComponent],
})
export class OfferComponent {
  constructor(private router: Router) {}

  items = [
    {
      id: '1',

      src: 'assets/images/audi.jpg',
      thumb: 'assets/images/audi.jpg',
    },
    {
      id: '2',

      src: 'assets/images/bmw1.jpg',
      thumb: 'assets/images/bmw1.jpg',
    },
    {
      id: '3',

      src: 'assets/images/bmw2.jpg',
      thumb: 'assets/images/bmw2.jpg',
    },
    {
      id: '4',

      src: 'assets/images/mercedes.jpg',
      thumb: 'assets/images/mercedes.jpg',
    },
    {
      id: '5',

      src: 'assets/images/porshe.jpg',
      thumb: 'assets/images/porshe.jpg',
    },
    {
      id: '6',

      src: 'assets/images/car.jpg',
      thumb: 'assets/images/car.jpg',
    },
  ];

  public openInNewTab(url: string) {
    window.open(url, '_blank')!.focus();
  }
}
