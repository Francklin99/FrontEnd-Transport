import { Component } from '@angular/core';
import { HeaderComponent } from '../../../Shared/Layouts/Private/header/header.component';
import { SidebarComponent } from '../../../Shared/Layouts/Private/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {

 headerBackgroundColor: string = '#001524';

  recieveColor(data:any) {
    this.headerBackgroundColor = data;
  }
}
