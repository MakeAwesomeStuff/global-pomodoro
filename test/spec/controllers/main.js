'use strict';

describe('Controller: pomodoroCtrl', function () {

  // load the controller's module
  beforeEach(module('globalPomodoroApp'));

  var pomodoroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    pomodoroCtrl = $controller('pomodoroCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
