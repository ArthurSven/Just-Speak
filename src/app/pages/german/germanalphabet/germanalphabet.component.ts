import {Component, NgModule} from '@angular/core';
import {CommonModule, NgFor} from "@angular/common";

@Component({
  selector: 'app-germanalphabet',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './germanalphabet.component.html',
  styleUrl: './germanalphabet.component.css'
})
export class GermanalphabetComponent {
  germanAlphabet1 = [
    { letter: 'A', sound: 'ah' },
    { letter: 'B', sound: 'bay' },
    { letter: 'C', sound: 'tsay' },
    { letter: 'D', sound: 'day' },
    { letter: 'E', sound: 'ay' },
    { letter: 'F', sound: 'eff' },
    { letter: 'G', sound: 'gay' },
    { letter: 'H', sound: 'hah' },
    { letter: 'I', sound: 'ee' },
    { letter: 'J', sound: 'yot' },
  ];

  germanAlphabet2 = [
    { letter: 'K', sound: 'kah' },
    { letter: 'L', sound: 'ell' },
    { letter: 'M', sound: 'em' },
    { letter: 'N', sound: 'en' },
    { letter: 'O', sound: 'oh' },
    { letter: 'P', sound: 'pay' },
    { letter: 'Q', sound: 'koo' },
    { letter: 'R', sound: 'er' },
    { letter: 'S', sound: 'ess' },
    { letter: 'T', sound: 'tay' },
  ]

  germanAlphabet3 = [
    { letter: 'U', sound: 'ooh' },
    { letter: 'V', sound: 'fau' },
    { letter: 'W', sound: 'vay' },
    { letter: 'X', sound: 'eeks' },
    { letter: 'Y', sound: 'Ypsilohn' },
    { letter: 'Z', sound: 'tset' },
    { letter: 'Ä ä', sound: 'ae' },
    { letter: 'Ö ö', sound: 'oe' },
    { letter: 'Ü ü', sound: 'ue' },
    { letter: 'ß', sound: 'esszett' },
  ]
}
