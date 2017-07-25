angular.module('app', [])
  .controller('MainCtrl', function($scope) {
    $scope.calculateRecallLosses = function() {
      if ($scope.schedPerRecall != null && $scope.recallsPerPatient != null && $scope.setRecallUponExit != null)
        return Math.pow((1 - ($scope.schedPerRecall / 100)), $scope.recallsPerPatient) * $scope.setRecallUponExit;
      else
        return null;
    }

    $scope.calculateNoShowLosses = function() {
      if ($scope.noshowRate != null && $scope.noReschedule != null)
        return (($scope.noshowRate / 100) * ($scope.noReschedule / 100) * 100);
      else
        return null;
    }

    $scope.calculateSlipLosses = function() {
      if ($scope.slipPast != null && $scope.laterReschedule != null)
        return (($scope.slipPast / 100) * ($scope.laterReschedule / 100) * 100);
      else
        return null;
    }

    $scope.calculateTotalLosses = function() {
      return $scope.calculateRecallLosses() + $scope.calculateNoShowLosses() + $scope.calculateSlipLosses();
    }

    $scope.calculateAnnualLosses = function() {
      return ($scope.calculateTotalLosses() / 100) * $scope.avgVisitValue * $scope.visitsPerWeek * 50;
    }
    
    $scope.calculateAnnualUnfilledVal = function() {
      return $scope.unfilledAppts * $scope.avgVisitValue * 50;
    }
  });
