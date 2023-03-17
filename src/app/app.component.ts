import {
  ChangeDetectionStrategy,
  Component,
  EnvironmentInjector,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
})
export class AppComponent implements OnInit {
  constructor(
    public environmentInjector: EnvironmentInjector,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}
}
