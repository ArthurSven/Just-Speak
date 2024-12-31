import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Directive, HostListener, Input } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

@Directive({
  standalone: true,
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  @Input('appSmoothScroll') target!: string;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    const element = document.querySelector(this.target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
