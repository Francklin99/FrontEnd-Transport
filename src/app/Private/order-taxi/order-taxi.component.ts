import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgFor,NgIf } from '@angular/common';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-order-taxi',
  standalone: true,
  imports: [RouterLink, NgFor, FormsModule, NgIf],
  templateUrl: './order-taxi.component.html',
  styleUrl: './order-taxi.component.scss'
})
export default class OrderTaxiComponent {
  FilterAll:boolean=false;
  capturedName: string = ''; // Inicializado vacío

  drivers = [
    {
      name: 'Juan Pérez',
      owner: 'Carlos Rodríguez',
      origin: 'Centro',
      destination: 'Aeropuerto',
      image: 'https://www.shutterstock.com/image-photo/ecuadorian-taxi-driver-inside-yellow-600nw-2195981813.jpg',
      profileLink: '/workspace/DriverProfile',
    },
    {
      name: 'Pedro González',
      owner: 'Ana Martínez',
      origin: 'Plaza Mayor',
      destination: 'Estación de Tren',
      image: 'https://media.istockphoto.com/id/1217653245/es/foto/conductor-feliz-que-transporta-a-una-mujer-en-un-coche.jpg?s=612x612&w=0&k=20&c=Jp7Ei6FYuZKlHnhAFq8jt2l6UBLpNPf6T-LCbt_DUls=',
      profileLink: '/workspace/DriverProfile',
    },
    {
      name: 'Pedro Sánchez',
      owner: 'Luis Fernández',
      origin: 'Parque Central',
      destination: 'Centro Comercial',
      image: 'https://sehoresa.com/wp-content/uploads/2022/05/Conduccion-profesional-transporte-de-personal.jpg',
      profileLink: '/workspace/DriverProfile',
    },
    {
      name: 'Ruben Díaz',
      owner: 'Roberto Gómez',
      origin: 'Hospital General',
      destination: 'Universidad',
      image: 'https://blogadmin.uberinternal.com/wp-content/uploads/2018/04/Conoce-cua%CC%81les-son-los-requisitos-para-ser-socio-conductor-Uber-en-Peru%CC%81.png',
      profileLink: '/workspace/DriverProfile',
    },
    {
      name: 'Carlos López',
      owner: 'Elena Ruiz',
      origin: 'Estadio Municipal',
      destination: 'Zona Hotelera',
      image: 'https://img.freepik.com/foto-gratis/vista-lateral-hombre-hermoso-joven-que-usa-telefono-celular-coche_23-2147873947.jpg?semt=ais_hybrid',
      profileLink: '/workspace/DriverProfile',
    },
    {
      name: 'Ana Martín',
      owner: 'Javier Torres',
      origin: 'Playa Principal',
      destination: 'Mirador',
      image: 'https://img.freepik.com/foto-gratis/empresaria-sonriente-dando-vuelta-coche_23-2148766998.jpg?semt=ais_hybrid',
      profileLink: '/workspace/DriverProfile',
    },
    {
      name: 'Miguel Hernández',
      owner: 'Sara Jiménez',
      origin: 'Terminal de Autobuses',
      destination: 'Zona Industrial',
      image: 'https://plus.unsplash.com/premium_photo-1663012943379-9580ab9340a7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hvZmVyfGVufDB8fDB8fHww',
      profileLink: '/workspace/DriverProfile',
    },
    {
      name: 'Isabel Romero',
      owner: 'Daniel Moreno',
      origin: 'Mercado Central',
      destination: 'Parque Tecnológico',
      image: 'https://practicatest.co/static/img/posts/co/responsabilidades-conductor-vehiculo.png',
      profileLink: '/workspace/DriverProfile',
    },
  ];
  constructor(private router: Router) {}
  regions = [
    {
      name: 'Huánuco',
      provinces: [
        {
          name: 'Huánuco',
          districts: ['Huánuco', 'Amarilis', 'Pillco Marca']
        },
        {
          name: 'Leoncio Prado',
          districts: ['Tingo María', 'Rupa Rupa', 'Castillo Grande']
        }
      ]
    },
    {
      name: 'San Martín',
      provinces: [
        {
          name: 'Moyobamba',
          districts: ['Moyobamba', 'Soritor', 'Yantalo']
        },
        {
          name: 'Tarapoto',
          districts: ['Tarapoto', 'La Banda de Shilcayo', 'Cacatachi']
        }
      ]
    },
    {
      name: 'Lima',
      provinces: [
        {
          name: 'Lima',
          districts: ['Miraflores', 'San Isidro', 'Surco']
        },
        {
          name: 'Huaral',
          districts: ['Huaral', 'Aucallama', 'Chancay']
        }
      ]
    },
    // Agrega más regiones aquí según necesidad
  ];

  selectedRegion: string = '';
  selectedProvince: string = '';
  provinces: any[] = [];
  districts: string[] = [];

  selectedRegion2: string = '';
  selectedProvince2: string = '';
  provinces2: any[] = [];
  districts2: string[] = [];


  onRegionChange(regionName: string) {
    this.selectedRegion = regionName;
    const region = this.regions.find(region => region.name === regionName);
    console.log(region);
    this.provinces = region ? region.provinces : [];
    this.selectedProvince = '';
    this.districts = [];
  }

  onProvinceChange(provinceName: string) {
    this.selectedProvince = provinceName;
    const province = this.provinces.find(province => province.name === provinceName);
    this.districts = province ? province.districts : [];
  }

  //============================================
  onRegionChange2(regionName: string) {
    this.selectedRegion2 = regionName;
    const region2 = this.regions.find(region => region.name === regionName);
    this.provinces2 = region2 ? region2.provinces : [];
    this.selectedProvince2 = '';
    this.districts2 = [];
  }

  onProvinceChange2(provinceName: string) {
    this.selectedProvince2= provinceName;
    const province2 = this.provinces2.find(province => province.name === provinceName);
    this.districts2 = province2 ? province2.districts : [];
  }

  onSearch(){
    this.FilterAll=true
  }

  // Esto es solo un ejemplo si necesitas un método para navegar manualmente
  goToDriverProfile(driver: any) {
    this.router.navigate([driver.profileLink], {
      queryParams: { name: driver.name, owner: driver.owner, origin: driver.origin, destination: driver.destination, image: driver.image }
    });
  }
}
