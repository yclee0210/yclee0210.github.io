/**
 * Created by yclee on 1/26/16.
 */

(function () {
  'use strict';

  describe('Wordpress API Test: ', function () {
    var $rootScope;
    var $state;

    var mockStateChangeParams = {
      toState: {
        defaultChild: 'rerouteState'
      },
      toParams: {
        stateParam: 'testParam'
      }
    };

    beforeEach(module('angularApp'));
    beforeEach(module(function ($urlRouterProvider) {
      $urlRouterProvider.deferIntercept();
    }));

    beforeEach(inject(function (_$rootScope_, _$state_) {
      $rootScope = _$rootScope_;
      $state = _$state_;

      spyOn($state, 'go');
    }));

    describe('Reroute', function () {
      it('should be made to correct URL', function () {
        $rootScope.$broadcast('$stateChangeStart',
          mockStateChangeParams.toState,
          mockStateChangeParams.toParams);

        expect($state.go).toHaveBeenCalledWith(
          mockStateChangeParams.toState.defaultChild,
          mockStateChangeParams.toParams
        )
      });
    });
  });
})();
