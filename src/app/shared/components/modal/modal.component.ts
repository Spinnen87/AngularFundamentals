import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() outputResult = new EventEmitter<boolean>();

  @Input() title!: string;
  @Input() message!: string;
  @Input() okButtonText!: string;
  @Input() cancelButtonText!: string;



  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  hideModal() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  onConfirm() {
    this.outputResult.emit(true);
    this.hideModal();
  }

  onCancel() {
    this.outputResult.emit(false);
    this.hideModal();
  }



}

