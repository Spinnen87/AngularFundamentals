import {Component, Input} from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() caption?: string;
  @Input() icon?: IconProp | undefined;
  @Input() disabled: boolean = false;
  @Input() type: 'submit' | 'button' | 'reset' = 'button';

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
