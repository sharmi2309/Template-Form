import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = {
    firstName: '',
    lastName: '',
    email: ''
  };

  onSubmit() {
    console.log('Form Submitted!', this.model);
  }
}
