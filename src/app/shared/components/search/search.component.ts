import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() placeholder = 'Input text';
  @Output() handelSearch = new EventEmitter<string>()
  searchStr = '';

  onSearch(){
    this.handelSearch.emit(this.searchStr);
  }

}

