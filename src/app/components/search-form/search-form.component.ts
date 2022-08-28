import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  cityName: string = '';
  cityNotFound: string = '';
  loading: boolean = false;
  @Output() public cityEvent = new EventEmitter();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  fetchCity() {
    this.loading = true;
    this.cityNotFound = '';
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (res) => {
        console.log(res);
        this.cityEvent.emit(res);
      },
      error: (err) => {
        this.cityNotFound = err.error.error.message;
      },
      complete: () => {},
    });
    this.loading = false;
    this.cityName = '';
  }
}
