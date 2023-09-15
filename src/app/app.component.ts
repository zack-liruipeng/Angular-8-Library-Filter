import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <main> 
      <div class="p-4">
        <div class="row">
          <a  class="link-body-emphasis 
                    link-offset-2 
                    link-underline 
                    link-underline-opacity-0
                    " 
              [routerLink]="['/']">
            <p class="h1 mb-3">Library</p>
          </a>
        </div>

        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </div>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

/*
Author: Ruipeng Li
Above function is used for define initial app page
*/
