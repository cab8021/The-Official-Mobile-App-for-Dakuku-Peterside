angular.module('starter.controllers', [
  'starter.services',
  'ionic.contrib.ui.cards'
  ])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

   // Return home on success
  $scope.returnTo = function(view) {
    $location.path(view)
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SessionsCtrl', function($scope, Session) {
  // $scope.sessions = {Session.query()};
  $scope.sessions = {};
})
.controller('newsfeedCtrl', function($scope, Post, $ionicLoading, $http) {
  
  $scope.show = function (){
    $ionicLoading.show({
      duration: 2000,
      template: "Loading"
    })
  }

$ionicLoading.show({
      duration: 20000,
      template: "Loading"
    });

  // $scope.posts = Post.query();

$http.get('http://dakukupeterside.com/wp-json/posts/').then(function (resp) {
    // body...
    $scope.posts = resp.data;
    $ionicLoading.hide();
  }, function(err){

  });



})
.controller('newsfeedPostCtrl', function($scope, $stateParams, Post, $http, $ionicLoading){
   $http.get('http://dakukupeterside.com/wp-json/posts/'+  $stateParams.postId).then(function (resp) {
    // body...
    $scope.post = resp.data;
    $ionicLoading.hide();

    // console.log("Fetched"+ data + ' http://dakukupeterside.com/wp-json/posts/'+  $stateParams.postId )
  }, function(err){

  });

}).controller('multimediaList', function($scope, $stateParams, $http, $ionicSlideBoxDelegate, $ionicLoading, $location){
  $ionicLoading.show({
    template: "fetching inages"
  });
      $http.get('http://dakukupeterside.com/api/' + $stateParams.ID + '.json').then(function(resp){
        $ionicLoading.hide();
        $scope.slides = resp.data;
        $ionicSlideBoxDelegate.update()

      },function(err){ 
        console.log(err);
        $ionicLoading.hide();
        $location.path('/app/error');

      })
      
  })

// education controller
.controller('EducationCtrl', function($scope) {
  $scope.education = [
  {
    id: 1,
    date: "12/1970",
    detail: "Born On December 31, 1970"
  },{
    id: 2,
    date: "1987",
    detail: "Attended Okrika Grammer School (OGS), From 1982 to 1987"
  },
  {
    id: 3,
    date: "---",
    detail: "Studied Hematology in Riverst State University Of Technology, Port Harcourt"
  },{
    id: 4,
    date: "---",
    detail: "Earned Post-Graduate Diploma"
  },{
    id: 5,
    date: "---",
    detail: "Earned a Masters in Business Administration"
  },
  {
    id: 6,
    date: "2014",
    detail: "Received Doctorate Degree in Organizational Behaviour with special interest in corporate political strategy from The University of Port Harcourt"
  }

  ]
  $scope.sessions = {};
})
.controller('SessionCtrl', function($scope, $stateParams, Session) {
  // $scope.session = Session.get({sessionId: $stateParams.sessionId})
  $scope.session = {};
}).directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        console.log('here');
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
});

