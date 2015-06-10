'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('calinioApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of skills to the scope', function () {
    expect(scope.skills.length).toBe(14);
  });

  describe('#getArrayFromNumber()', function () {
    it('should return an array of length 5 when given the integer 5', function () {
      var numberArray = scope.getArrayFromNumber(5);
      expect(numberArray.length).toBe(5);
    });
  });
});

