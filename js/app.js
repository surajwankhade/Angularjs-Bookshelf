var app = angular.module("myApp", []);

app.controller('MainController', ['$scope',  function($scope) { 
  $scope.plusOne = function(index) { 
  $scope.products[index].likes += 1; 
};
  $scope.minusOne = function(index) { 
  $scope.products[index].dislikes += 1; 
};
  $scope.title = "Suraj's Bookshelf"; 
  $scope.promo = 'Some of my favourite books';
  $scope.products = [ 
  { 
    name: 'The Fountainhead', 
    price: 12.99, 
    pubdate: new Date('1943', '03', '15'), 
    cover: 'img/fountain.jpg', 
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Rich Dad Poor Dad', 
    price: 8, 
    pubdate: new Date('2000', '03', '01'), 
    cover: 'img/richdad.jpg' ,
    likes:0,
    dislikes: 0
  } ,
    { 
    name: 'The Far Pavilions', 
    price: 10.99, 
    pubdate: new Date('1973', '08', '08'), 
    cover: 'img/farpavilions.jpg'  ,
    likes:0,
    dislikes: 0
  }, 
  { 
    name: 'The God of Small Things', 
    price: 19.99, 
    pubdate: new Date('1997', '03', '22'), 
    cover: 'img/god.jpg'  ,
    likes:0,
    dislikes: 0
  } 
]
}]);
