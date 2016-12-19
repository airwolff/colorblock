colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  var self = this;
  self.factory = DataFactory;

  self.handleInput = function (clickedColor) {
      self.factory.colors.push(clickedColor);
  };
}]);
