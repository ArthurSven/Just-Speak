import { Routes, RouterModule } from '@angular/router';
import { NgModule} from "@angular/core";
import path from "node:path";
import {DefaultLayoutComponent} from "./layouts/default-layout/default-layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {GermanLayoutComponent} from "./layouts/german-layout/german-layout.component";
import {GermanhomeComponent} from "./pages/german/germanhome/germanhome.component";
import {GermanalphabetComponent} from "./pages/german/germanalphabet/germanalphabet.component";
import {GermanadjectivesComponent} from "./pages/german/germanadjectives/germanadjectives.component";
import {GermancasesComponent} from "./pages/german/germancases/germancases.component";
import {GermannounsComponent} from "./pages/german/germannouns/germannouns.component";
import {GermannumbersComponent} from "./pages/german/germannumbers/germannumbers.component";
import {GermanprepositionsComponent} from "./pages/german/germanprepositions/germanprepositions.component";
import {GermanpronounsComponent} from "./pages/german/germanpronouns/germanpronouns.component";
import {GermansentencesComponent} from "./pages/german/germansentences/germansentences.component";
import {GermantensesComponent} from "./pages/german/germantenses/germantenses.component";
import {GermanverbsComponent} from "./pages/german/germanverbs/germanverbs.component";

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
      {path: '', component: GermanhomeComponent},
      {path: 'germanalphabet', component: GermanalphabetComponent},
      {path: 'germanadjectives', component: GermanadjectivesComponent},
      {path: 'germancases', component: GermancasesComponent},
      {path: 'germannouns', component: GermannounsComponent},
      {path: 'germannumbers', component: GermannumbersComponent},
      {path: 'germanprepositions', component: GermanprepositionsComponent},
      {path: 'germanpronouns', component: GermanpronounsComponent},
      {path: 'germansentences', component: GermansentencesComponent},
      {path: 'germantenses', component: GermantensesComponent},
      {path: 'germanverbs', component: GermanverbsComponent},
    ]
  }
]
