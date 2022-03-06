var CatClicker = function (catImageId) {
  this.catImage = document.getElementById(catImageId);
  this.numberOfClicks = 0;
  this.bindEvents();
};

CatClicker.prototype.incrementNumberOfClicks = function () {
  this.numberOfClicks++;
};

CatClicker.prototype.bindEvents = function () {
  var self = this;
  this.catImage.addEventListener('click', function () {
    self.incrementNumberOfClicks();
  });
};

new CatClicker('cat-image-id-1');
new CatClicker('cat-image-id-2');
