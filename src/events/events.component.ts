import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { AboutUsComponent } from "../about-us/about-us.component";

@Component({
  selector: 'app-events',
  imports: [BannerComponent, AboutUsComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent { }
