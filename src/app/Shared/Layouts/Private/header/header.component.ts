import { Component, HostListener, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
userMenu:boolean = false
@Input() headerBackgroundColor: string = '#001524';

toggleUserMenu(event: MouseEvent){
  this.userMenu = !this.userMenu
  event.stopPropagation(); // Evita que el clic en el perfil cierre el menú inmediatamente
}

@HostListener('document:click', ['$event'])
closeMenuIfClickedOutside(event: MouseEvent) {
  const menuElement = document.getElementById('userMenu');
  const profileImageElement = document.querySelector('.header__profile-image');

  // Si el clic es fuera del menú y del perfil
  if (menuElement && !menuElement.contains(event.target as Node) &&
      profileImageElement && !profileImageElement.contains(event.target as Node)) {
    this.userMenu = false; // Cierra el menú
  }
}
}
