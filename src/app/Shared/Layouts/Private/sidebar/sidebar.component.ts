import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
sidebarBackgroundColor: string = '#001524';
@Output() sendColor = new EventEmitter<string>();

lightBackgroundColor(){
 this.sidebarBackgroundColor= '#430d56';
 this.sendColor.emit(this.sidebarBackgroundColor);
}
darkBackgroundColor(){
  this.sidebarBackgroundColor= '#001524';
  this.sendColor.emit(this.sidebarBackgroundColor);
}


}
