export default class Map {
  constructor() {
    window.map = new google.maps.Map($('[data-google-maps]')[0], {
      zoom: 3,
    });
  }
}
