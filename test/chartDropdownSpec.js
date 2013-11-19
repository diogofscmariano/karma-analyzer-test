describe('Dropdown', function(){
  var $compile, $rootScope, template, element;
 
 
  //load all modules, including the html template, needed to support the test
  // load the tabs code
  beforeEach(module('chartTypeDropdown'));

  // load the templates
  beforeEach(module('tpl/chartTypes.html'));

  beforeEach(inject(function($templateCache,_$compile_,_$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    $rootScope.items = [
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
      }];

      var formElement = angular.element('<div ng-app="chartTypeDropdown"><charttypedropdown></charttypedropdown></div>');
      element = $compile(formElement)($rootScope);
      $rootScope.$digest();
  }));

  it("has template correctly loaded", function() {
    expect(element.find('.dropdownButton').length).toEqual(1);
    expect(element.find('.dropdownPopup').length).toEqual(1);
  });

  it("has item list applied", function() {
    expect(element.find('.option').length).toEqual(2);
    expect(element.find('.optionSeparator').length).toEqual(1);
  });

  it("has dropdown hidden", function() {
    expect(element.find('.dropdownPopup').css('display')).toEqual('none');
  });
});

