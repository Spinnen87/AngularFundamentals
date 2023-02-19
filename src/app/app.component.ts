import { Component } from '@angular/core';

type View = 'login' | 'courses' | 'registration' | 'editCourse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Fundamentals';
  isShowConfirmModal:boolean = false;
  view: View = 'editCourse';

  showConfirmModal(){
    this.isShowConfirmModal = !this.isShowConfirmModal;
  }

  inputChange(data: boolean) {
    console.log('Modal data results ', data)
  }

  changeView(v: View) {
    this.view = v;
  }
}
