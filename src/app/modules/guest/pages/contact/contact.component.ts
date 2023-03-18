import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { Feature, Map, Overlay, View } from 'ol/index.js';
import { OSM, Vector as VectorSource } from 'ol/source.js';
import { Point } from 'ol/geom.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import { useGeographic } from 'ol/proj.js';
import { fromLonLat } from 'ol/proj';
import * as olProj from 'ol/proj';

useGeographic();
@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, IconComponent],
})
export class ContactComponent {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  public map: any;
  public view: any;
  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.map = null;
    this.mapContainer.nativeElement.textContent = '';

    setTimeout(() => {
      this.initMap();
    }, 1000);
  }

  private initMap(): void {
    // const point = new Point(mapCenter);
    console.log(olProj.fromLonLat([52.229676, 21.012229]));

    this.map = new Map({
      view: new View({
        center: olProj.fromLonLat([52.229676, 21.012229]),
        zoom: 8,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        // new VectorLayer({
        //   source: new VectorSource({
        //     features: [new Feature(olProj.fromLonLat([52.229676, 21.012229]))],
        //   }),
        // }),
      ],
      target: 'map',
    });

    // this.map
    //   .getView()
    //   .setCenter(
    //     olProj.transform(
    //       [50.85402845, 20.60991568734511],
    //       'EPSG:4326',
    //       'EPSG:3857'
    //     )
    //   );

    console.log(this.map);

    this.cdr.detectChanges();
  }
}
