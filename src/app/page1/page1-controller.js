'use strict';

angular.module('hw6')
  .controller('page1Ctrl', function ($scope, isDirty, $stateParams) {
    $scope.mes = $stateParams.par1;
    $scope.text = '';

    $scope.checkDirt = function () {
      isDirty.check($scope.text);
    };

    $scope.save = function () {
      isDirty.reset();
    };
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('main.page1',
      {
        url: '/page1',
        templateUrl: 'app/page1/page1.html',
        controller: 'page1Ctrl',
        params: {
          par1: {value: ''}
        }
      });
  })
;
