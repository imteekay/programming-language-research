import DirectionsServices from './directions_services';

export default class RouteDrawer {
  constructor() {
    new DirectionsServices();
  }

  draw(origin, destination) {
    window.directionsRenderer.setMap(window.map);
    window.directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          window.directionsRenderer.setDirections(response);
        } else {
          console.log('Não foi possível obter a rota. Motivo: ' + status);
        }
      }
    );
  }
}
