var OccupationAreaProtectionLevelSynchronizer = function() {
  this.$occupationAreas = $('[data-occupation-area]');
  this.$protectionLevels = $('[data-protection-level] option');
  this.$checkedOccupationArea = this._getCheckedOccupationArea();
  this.bindChangeOnOccupationArea();
}

OccupationAreaProtectionLevelSynchronizer.prototype.bindChangeOnOccupationArea = function() {
  var self = this;

  this.$occupationAreas.change(function() {
    self.$checkedOccupationArea = self._getCheckedOccupationArea();
    self.sync();
  });
}

OccupationAreaProtectionLevelSynchronizer.prototype.sync = function() {
  if (this.$checkedOccupationArea.value == 'attendance') {
    this.$protectionLevels.each(function() {
      if (this.value == 'first') {
        $(this).prop('disabled', false);
        $(this).prop('selected', true);
      } else {
        $(this).prop('disabled', true);
      }
    })
  } else if (this.$checkedOccupationArea.value == 'assistance') {
    this.$protectionLevels.each(function() {
      if (this.value == 'second') {
        $(this).prop('disabled', false);
        $(this).prop('selected', true);
      } else {
        $(this).prop('disabled', true);
      }
    })
  } else if (this.$checkedOccupationArea.value == 'attendance_assistance') {
    this.$protectionLevels.each(function() {
      if (this.value == 'third') {
        $(this).prop('disabled', false);
        $(this).prop('selected', true);
      } else {
        $(this).prop('disabled', true);
      }
    })
  }
}

OccupationAreaProtectionLevelSynchronizer.prototype._getCheckedOccupationArea = function() {
  return $('[data-occupation-area]:checked')[0];
}
