/**
 * Created by yclee on 1/6/16.
 */

(function () {
  'use strict';

  describe('Shell Controller Test :', function () {
    var ShellController,
      $rootScope,
      SHELL;

    beforeEach(module('angularApp'));

    beforeEach(inject(function ($controller, _$rootScope_, _SHELL_) {
      $rootScope = _$rootScope_.$new();
      SHELL = _SHELL_;

      ShellController = $controller('ShellController', {
        $rootScope: $rootScope,
        SHELL: SHELL
      });
    }));

    describe('Initialization', function () {
      it('should define layout', function () {
        expect($rootScope.layout).toBeDefined();
      });
    });
  });

})();
