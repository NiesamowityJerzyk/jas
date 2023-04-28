import { Injectable } from '@angular/core';

export interface ILink {
  link: string;
  name: string;
  svgName?: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ConstsService {
  public navigationLinks: ILink[] = [
    {
      link: '/home',
      name: 'Strona główna',
      svgName: 'gm-dashboard',
      active: false,
    },
    {
      link: '/oferta',
      name: 'Oferta',
      svgName: 'gm-dashboard',
      active: false,
    },
    {
      link: '/o-nas',
      name: 'O nas',
      svgName: 'gm-creative-hub',
      active: false,
    },
    { link: '/kontakt', name: 'Kontakt', svgName: '', active: false },
  ];
}
