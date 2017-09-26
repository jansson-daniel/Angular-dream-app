import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<p class='success-alert'>Your were successful</p>`,
  styles: [`
    .success-alert {
        padding: 10px;
        background: lightgreen;
        border: 1px solid green;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
