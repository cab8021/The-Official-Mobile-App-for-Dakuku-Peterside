// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault(1);
      setTimeout(function() {
    $cordovaSplashscreen.hide()
  }, 5000)
      
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html",
          controller: 'SessionsCtrl'
        }
      }
    })

  .state('app.biography', {
    url: "/biography",
    views: {
      'menuContent': {
        templateUrl: "templates/biography.html"
      }
    }
  })

  .state('app.awards', {
    url: "/awards",
    views: {
      'menuContent': {
        templateUrl: "templates/awards.html"
      }
    }
  })
  .state('app.multimedia', {
    url: "/multimedia",
    views: {
      'menuContent': {
        templateUrl: "templates/multimedia.html"
      }
    }
  })
  .state('app.education', {
    url: "/education",
    views: {
      'menuContent': {
        templateUrl: "templates/education.html"
      }
    }
  })
  .state('app.political', {
    url: "/political",
    views: {
      'menuContent': {
        templateUrl: "templates/political.html"
      }
    }
  })
  .state('app.newsfeed', {
    url: "/newsfeed",
    views: {
      'menuContent': {
        templateUrl: "templates/newsfeed.html",
        controller: "newsfeedCtrl"
      }
    }
  })
  .state('app.sessions', {
      url: "/sessions",
      views: {
        'menuContent': {
          templateUrl: "templates/sessions.html",
          controller: 'SessionsCtrl'
        }
      }
    })
  
  .state('app.newsfeedPost', {
    url: "/newsfeedPost/:postId",
    views: {
      'menuContent': {
        templateUrl: "templates/newsfeedPost.html",
        controller: 'newsfeedPostCtrl'
      }
    }
  })
  
  .state('app.session', {
    url: "/sessions/:sessionId",
    views: {
      'menuContent': {
        templateUrl: "templates/session.html",
        controller: 'SessionCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
