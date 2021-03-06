// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module(
  'starter',
  ['ionic', 'starter.controllers', 'ngResource', 'mighub.constants', 'mighub.services', 'pascalprecht.translate', 'localeapp.translations']
)

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
        cordova.plugins.Keyboard.disableScroll(true)

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault()
      }
      // google-analytics using plugin ::
      // https://github.com/danwilson/google-analytics-plugin
      if(typeof analytics !== undefined) {
        analytics.startTrackerWithId("UA-83544097-1");
      } else {
        console.log("Google Analytics Unavailable");
      }
    })
  })

  .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })

      .state('app.categories', {
        url: '/categories',
        views: {
          'menuContent': {
            templateUrl: 'templates/categories.html',
            controller: 'CategoriesCtrl'
          }
        }
      })

      .state('app.single', {
        url: '/categories/:categoryId',
        animate: 'slide-in-right',
        views: {
          'menuContent': {
            templateUrl: 'templates/category.html',
            controller: 'CategoryCtrl'
          }
        }
      })

      .state('app.favorites', {
        url: '/favorites',
        views: {
          'menuContent': {
            templateUrl: 'templates/favorites.html',
            controller: 'FavoritesCtrl'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/categories')

    $translateProvider
      .preferredLanguage('en')
      //.useSanitizeValueStrategy('sanitize')
  })
