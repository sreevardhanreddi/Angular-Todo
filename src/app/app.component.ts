import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ToDos: any = [];
  items: string;



  onAdd() {
    if (this.items.length > 0) {
      this.ToDos.push(this.items);
      console.log(this.ToDos);
      console.log(this.items);
      this.items = '';
    }

  }
  onRemove(index: number) {

    this.ToDos.splice(index, 1);
    console.log('clicked');

  }



}
