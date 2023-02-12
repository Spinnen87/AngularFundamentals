import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Fundamentals';
  isShowConfirmModal:boolean = false;

  showConfirmModal(){
    this.isShowConfirmModal = !this.isShowConfirmModal;
  }

  inputChange(data: boolean) {
    console.log('Modal data results ', data)
  }
}
