import { Component } from '@angular/core';
import {GermanSidebarComponent} from "../../components/german-sidebar/german-sidebar.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-german-layout',
  standalone: true,
  imports: [
    GermanSidebarComponent, RouterModule
  ],
  templateUrl: './german-layout.component.html',
  styleUrl: './german-layout.component.css'
})
export class GermanLayoutComponent {

}
