import { Component } from '@angular/core';
import { LoadingService } from "./shared/services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoadingService]
})
export class AppComponent {
  title = 'e-book';

  logout() {
  }
}
