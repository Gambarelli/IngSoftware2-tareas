import { CityService } from '../city.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'List', cols: 1, rows: 2 },
          { title: 'City', cols: 1, rows: 2 },
        ];
      }

      return [
        { title: 'list', cols: 1, rows: 2 },
        { title: 'City', cols: 1, rows: 2 },
      ];
    })
  );

  constructor(private cityService: CityService, private breakpointObserver: BreakpointObserver) {}

  weather = null;
  setData(weatherData) {
    this.weather = weatherData;
  }

}

