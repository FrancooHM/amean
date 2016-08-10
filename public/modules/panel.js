var panel = angular.module('BeerTapsPanel', ['auth0', 'angular-storage', 'angular-jwt', 'ngRoute']);
panel.config(function myAppConfig($routeProvider, authProvider, $httpProvider, $locationProvider,
  jwtInterceptorProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: 'modules/home/home.html',
      pageTitle: 'Homepage',
      requiresLogin: true
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'modules/login/login.html',
      pageTitle: 'Login'
    });

  authProvider.init({
    domain: 'genosha.auth0.com',
    clientID: 'aiPkcx7oPPp4IFVolNHsI62B9j7gJu5L',
    loginUrl: '/login'
  });

  //Called when login is successful
  authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
    console.log("Login Success");
    profilePromise.then(function(profile) {
      store.set('profile', profile);
      store.set('token', idToken);
    });
    $location.path('/');
  });

  authProvider.on('loginFailure', function() {
    alert("Error");
  });

  authProvider.on('authenticated', function($location) {
    console.log("Authenticated");

  });

  jwtInterceptorProvider.tokenGetter = function(store) {
    return store.get('token');
  };

  // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
  // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
  // want to check the delegation-token example
  $httpProvider.interceptors.push('jwtInterceptor');
});
panel.run(['auth', function(auth) {
  // This hooks all auth events to check everything as soon as the panel starts
  auth.hookEvents();
}]);
panel.run(function($rootScope, auth, store, jwtHelper, $location) {
  $rootScope.$on('$locationChangeStart', function() {

    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          //Re-authenticate user if token is valid
          auth.authenticate(store.get('profile'), token);
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $location.path('/');
      }
    }
  });
});
panel.controller('PanelRootCtrl', function PanelRootCtrl($scope, $location) {
  $scope.$on('$routeChangeSuccess', function(e, nextRoute) {
    if (nextRoute.$$route && angular.isDefined(nextRoute.$$route.pageTitle)) {
      $scope.pageTitle = nextRoute.$$route.pageTitle + ' | Auth0 BeerTapsPanel';
    }
  });
});
