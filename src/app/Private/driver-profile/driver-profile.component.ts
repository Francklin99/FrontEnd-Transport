import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-driver-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './driver-profile.component.html',
  styleUrl: './driver-profile.component.scss'
})
export default class DriverProfileComponent {
  driverData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.driverData = {
        name: params['name'],
        owner: params['owner'],
        origin: params['origin'],
        destination: params['destination'],
        image:params['image']
      };
    });
  }
}
