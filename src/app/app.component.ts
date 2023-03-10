import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  filterOption: string = 'all';
  searchValue: string = '';
  items = [{
    project: 'Ambassador',
    type: true
  }, {
    project: 'tim',
    type: true
  }];

  filteredItems = [];

  constructor() {
    this.updateResults();
  }

  async updateResults() {
    this.filteredItems = this.searchByValue(this.items);
  }

  searchByValue(items) {
    return items.filter(item => {
      if (this.searchValue.trim() === '') {
        return true;
      } else {
        return item.project.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) 
      }
    })
  }




}
