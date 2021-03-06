angular.module('flapperNews')
  .controller('MainCtrl', ['$scope', 'posts',
    function($scope, posts) {
      $scope.test = 'hello world'
      $scope.posts = posts.posts
      $scope.addPost = function () {
        if(!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0,
          comments: [
            {author: 'James', body: 'Cool Post!', upvotes: 0},
            {author: 'Vy', body: 'Amazing', upvotes: 0}
          ]
        });
        $scope.title = ''
        $scope.link = ''
      }
      $scope.incrementUpvotes = function (post) {
        post.upvotes += 1;
      }
    }
  ])