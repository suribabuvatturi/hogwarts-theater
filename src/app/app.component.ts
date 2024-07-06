import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule,AsyncPipe,JsonPipe ],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  name = 'Angular';
  http = inject(HttpClient);
  data$ = this.http.get('cockails');
  dataId$= this.http.get('cockails/12560')
}
