import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { StartPageComponent } from "./start-page/start-page.component";
import { AboutComponent } from './about/about.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, StartPageComponent, AboutComponent, RouterModule]
})
export class AppComponent {

  openResume() {
    window.open('assets/resume.pdf', '_blank');
  }

  title = 'portfolio';
}
