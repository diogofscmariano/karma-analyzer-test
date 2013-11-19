var chartTypeDropdown = angular.module('chartTypeDropdown', []);

chartTypeDropdown.controller('DropdownCtrl', ['$document','$scope', function($document, $scope) {}]);

chartTypeDropdown.directive('charttypedropdown',['$document', function($document){
    return {
        restrict: 'E',
        require: '?ngModel', 
        templateUrl: 'tpl/chartTypes.html',
        replace: true,
        link: function(scope, element, attr){
            scope.isDropdownVisible = false;
            
            /*var items = [];

            var selectedChart = cv.rptEditor.report.chartMenuItem;

            angular.forEach(cv.util.addChartItems(), function(obj, key){
                if(obj.separator){
                    items.push({
                        option: false,
                        selected: ""
                    });
                } else {
                    items.push({
                        option: true,
                        label: obj.label,
                        id: obj.id,
                        selected: obj.label == selectedChart ? "selected" : ""
                    });
                }
            });

            scope.items = items;*/

            scope.toggleSelect = function(){
                scope.isDropdownVisible = !scope.isDropdownVisible;
            }

            scope.toggleSelectedOption = function(clickedElementId) {
                angular.forEach(scope.items, function(v, k) {
                    if (v.id == clickedElementId)
                        v.selected = "selected";
                    else
                        v.selected = "";
                });

                scope.isDropdownVisible = !scope.isDropdownVisible;

                cv.rptEditor.report._initDisplay("JSON", "CUSTOM", clickedElementId);
                cv.rptEditor.report.history.add(new cv.ReportState("actionChartType"));
                cv.rptEditor.report.refreshReport();
            }

            var elementMatchesAnyInArray = function(element, elementArray) {
                for (var i=0; i < elementArray.length; i++){
                    if (element == elementArray[i]){
                        return true;
                    }
                }
                return false;
            }

            $document.bind('click', function(event){
                if (elementMatchesAnyInArray(event.target, element.find(event.target.tagName))){
                    return;
                }
                scope.isDropdownVisible = false;
                scope.$apply();
            });
        }
    }
}]);