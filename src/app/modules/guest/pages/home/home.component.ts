import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { BeforeSlideDetail, InitDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightGallery } from 'lightgallery/lightgallery';
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, IconComponent, LightgalleryModule],
})
export class HomeComponent {
  private lightGallery!: LightGallery;
  private needRefresh = false;

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
  constructor(private router: Router) {}

  ngOnInit() {
    // document.querySelector('.animation')?.classList.add('toRight');
  }
  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  addImage = () => {
    this.items = [
      ...this.items,
      {
        id: '5',

        src: 'assets/images/audi.jpg',
        thumb: 'assets/images/audi.jpg',
      },
    ];
    this.needRefresh = true;
  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
    console.log(this.lightGallery);
  }
  title = 'angular-demo';

  onInit = (detail: InitDetail): void => {
    this.lightGallery = detail.instance;
  };
}
