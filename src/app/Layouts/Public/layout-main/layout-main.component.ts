import { Component } from '@angular/core';
import { HeaderComponent } from '../../../Shared/Layouts/Public/header/header.component';
import { FooterComponent } from '../../../Shared/Layouts/Public/footer/footer.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-page-main',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss'
})
export default class LayoutMainComponent {

}
