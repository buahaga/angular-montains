import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <h1> Welcome to {{ title }}!</h1>
    <h3>Find intresting places, write tips and comments</h3>
    <router-outlet></router-outlet>
  </div>`,
  styles: [`div {
    text-align: center;
  }

  h1 {
    margin: 30px;
    margin-bottom: 10px;
  }

  h3 {
    margin: 5px;
    font-style: italic;
    font-weight: 400;
  }`]
})

export class AppComponent {
  title = 'MountainSearch';
}
