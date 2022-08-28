import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weatherModel';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData('tel aviv').subscribe({
      next: (res: WeatherData) => {
        this.weatherData = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
