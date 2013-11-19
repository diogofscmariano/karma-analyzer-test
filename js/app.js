var app = angular.module('app', ['chartTypeDropdown']);

app.controller('DropdownCtrl', function($scope) {
  $scope.items = [
    {
      id: "button1",
      label: "Button 1",
      option: true,
      selected: ""
    },
    {
      id: "button2",
      label: "Button 2",
      option: true,
      selected: ""
    },
    {
      id: "button3",
      label: "Button 3",
      option: false,
      selected: ""
    },
    {
      id: "button4",
      label: "Button 4",
      option: true,
      selected: ""
    },
    {
      id: "button5",
      label: "Button 5",
      option: true,
      selected: ""
    }
  ];
    
});
