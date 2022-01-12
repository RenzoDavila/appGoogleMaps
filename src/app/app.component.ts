import { Component } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Como usar el Componente Google Maps de Angular';

  // Configuración de Google Maps
  center = { lat: -11.9865699, lng: -77.0679477 };
  zoom = 15;
  display?: google.maps.LatLngLiteral;
}
