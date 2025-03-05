import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-german-sidebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './german-sidebar.component.html',
  styleUrl: './german-sidebar.component.css'
})
export class GermanSidebarComponent {

}
