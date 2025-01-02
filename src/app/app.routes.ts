import { Routes, RouterModule } from '@angular/router';
import { NgModule} from "@angular/core";
import path from "node:path";
import {DefaultLayoutComponent} from "./layouts/default-layout/default-layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {GermanLayoutComponent} from "./layouts/german-layout/german-layout.component";

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {path: '', component: HomeComponent}
    ],
  },
  {
    path: 'german',
    component: GermanLayoutComponent,
    children: [

    ]
  }
]
