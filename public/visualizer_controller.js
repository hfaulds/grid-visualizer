function VisualizerController($scope, $timeout) {
  $scope.cellSize = 10;
  $scope.cells = [];

  var socket = io.connect('http://localhost');

  socket.on('replace grid', function (new_grid) {
    $scope.$apply(function () {
      $scope.cells = new_grid;
    });
  });
}
