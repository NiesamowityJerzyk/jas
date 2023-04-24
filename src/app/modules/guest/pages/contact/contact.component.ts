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
// import { Feature, Map, Overlay, View } from 'ol/index.js';
// import { OSM, Vector as VectorSource } from 'ol/source.js';
// import { Point } from 'ol/geom.js';
// import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
// import { useGeographic } from 'ol/proj.js';
// import { fromLonLat } from 'ol/proj';
import * as olProj from 'ol/proj';
import VectorLayer from 'ol/layer/Vector.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import { fromLonLat, transform } from 'ol/proj.js';
import VectorSource from 'ol/source/Vector.js';
import Feature from 'ol/Feature.js';
import VectorImageLayer from 'ol/layer/VectorImage';
import { Point, Polygon } from 'ol/geom';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Icon from 'ol/style/Icon';
import Overlay from 'ol/Overlay';
// import bootstrap from 'bootstrap';
// useGeographic();
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

    // const washingtonLonLat = [-77.036667, 38.895];
    const buskoLonLat = [20.718889, 50.470556];
    const buskoWebMercator = fromLonLat(buskoLonLat);

    const feature = new Feature({
      // geometry: new Polygon(buskoWebMercator),
      labelPoint: new Point(buskoWebMercator),
      name: 'Busko Car Detailing',
    });

    feature.setGeometryName('labelPoint');

    let style = new Style({
      // stroke: new Stroke({
      //   color: 'rgb(255, 154, 0)',
      //   width: 7,
      // }),
      // icon: new Icon({
      //   src: 'assets/icons/arrow-up.svg',
      // }),

      image: new Icon({
        // anchor: [0.5, 46],
        anchor: [0.5, 1],
        // anchorXUnits: 'fraction',
        // anchorYUnits: 'pixels',
        src: 'assets/images/pin.png',
        width: 60,
        height: 60,

        // src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png',
      }),
    });

    feature.setStyle(style);

    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),

        new VectorLayer({
          source: new VectorSource({
            // features: [new Feature(buskoWebMercator)],
            features: [feature],
            // url: 'https://api.maptiler.com/maps/basic-v2/tiles.json?key=1mhKLQej1duSyAMARCRZ',
          }),
        }),
      ],
      target: 'map',
      view: new View({
        // center: olProj.fromLonLat([52.229676, 21.012229]),
        center: buskoWebMercator,
        zoom: 15,
      }),
    });

    const element = document.getElementById('popup');

    // el.addEventListener('click', () => {
    //   this.content.innerHTML = `<p>Location: ${locationName}</p>`;
    //   this.overlay.setPosition(coords);
    // });

    // const exLayer = new VectorLayer({
    //   source: new VectorSource({
    //     features: [new Feature(buskoWebMercator)],
    //     url: 'https://api.maptiler.com/maps/basic-v2/tiles.json?key=1mhKLQej1duSyAMARCRZ',
    //   }),
    //   visible: true,
    // });

    console.log(this.map);
    // this.map.addLayer(exLayer);
    let container = document.getElementById('popup');
    let content = document.getElementById('popup-content');
    let closer = document.getElementById('popup-closer');
    console.log(content);

    let overlay = new Overlay({
      element: container as any,
      // autoPan: true,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });
    this.map.addOverlay(overlay);

    // closer.onclick = function () {
    //   overlay.setPosition(undefined);
    //   closer.blur();
    //   return false;
    // };
    closer?.addEventListener('click', (e) => {
      overlay.setPosition(undefined);
      closer!.blur();
      e.preventDefault();
      return false;
    });

    this.map.on('singleclick', (event: any) => {
      if (this.map.hasFeatureAtPixel(event.pixel) === true) {
        var coordinate = event.coordinate;
        console.log(coordinate);
        console.log(content);

        content!.innerHTML = 'Janusza Kusocińskiego 2a, 28-100 Busko-Zdrój';
        overlay.setPosition(coordinate);
      } else {
        console.log('s');
        overlay.setPosition(undefined);
        (closer as HTMLElement).blur();
      }
    });
    this.cdr.detectChanges();
  }
}
