angular.module('starter.services', [
	'ngResource'
	]).factory('Session', function ($resource) {
	return $resource('http://dakukupeterside.com/wp-json/posts?filter[tag]=newsfeed');
})

.factory('Post', function($resource) {
  return $resource('http://dakukupeterside.com/wp-json/posts/:postId');
});