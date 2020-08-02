export default class Geocoder {
  constructor() {
    window.geocoder = new google.maps.Geocoder();
  }
}
