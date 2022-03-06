export default class DirectionsServices {
  constructor() {
    window.directionsService = new google.maps.DirectionsService();
    window.directionsRenderer = new google.maps.DirectionsRenderer();
  }
}
