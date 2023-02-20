import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {

  form = this.fb.group({
    title: ["", [
      Validators.required,
    ]],
    description: ["", [
      Validators.required,
    ]],
    newAuthor: ['', [Validators.pattern(/^[A-Za-z0-9]+$/)]],
    authors: this.fb.array([]),
    duration: [0, [
      Validators.required,
      Validators.min(0)
    ]],
  });

  constructor(private fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }


  get title() {
    return this.form.get('title');
  }

  get description(){
    return this.form.get('description')
  }

  get duration() {
    return this.form.get('duration');
  }

  get authors() {
    return this.form.controls["authors"] as FormArray;
  }

  get newAuthor(){
    return this.form.get('newAuthor');
  }


  addAuthor(){
    const newAuthorValue = this.form.get('newAuthor')?.value;
    if (newAuthorValue) {
      const newAuthor = new FormControl(newAuthorValue);
      this.authors.push(newAuthor);
      this.newAuthor?.setValue('');
    }
  }

  deleteAuthor(index: number){
    this.authors.removeAt(index);
  }


  onFormSubmit(){
    console.log(JSON.stringify(this.form.value, null, 2));
  }

}
