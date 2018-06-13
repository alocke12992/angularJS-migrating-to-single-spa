'use strict';

angular
.module('AngularDrumMachine')
.directive('displayMachine', [function() {
  return {
    restrict: 'E',
    templateUrl: 'assets/templates/display-machine.template.html',
  }
}])