(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = product;
    });

    app.controller("PanelController", function(){
      this.tab = 1;

      this.selectTab = function(setTab){
        this.tab = setTab;
      }

      this.isSelected = function(checkTab){
        return this.tab === checkTab;
      }

    });

    app.controller("ReviewController", function(){
      this.review = {};

      this.addReview = function(product){
          product.reviews.push(this.review);
          this.review = {};
      };
    });

    var product = [
      {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Some gems have hidden qualities beyond their luster.',
        canPurchase: true,
        soldOut: false,
        images: [
            {
              full: 'gem1-full.jpg',
            },
            {
              thumb: 'gem2-thumb.jpg',
            }
        ],
        reviews: [
          {
            stars: 5,
            body: "I love this product!",
            author: "joe@thomas.com"
          },
          {
            stars: 1,
            body: "This product sucks!",
            author: "tim@hater.com"
          }
        ]
      },
      {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'Some gems have hidden qualities beyond their luster.',
        canPurchase: true,
        soldOut: false,
        images: [
            {
              full: 'gem2-full.jpg',
            },
            {
              thumb: 'gem2-thumb.jpg',
            }
        ],
        reviews: [
          {
            stars: 1,
            body: "This product sucks!",
            author: "joe@thomas.com"
          },
          {
            stars: 5,
            body: "I love this product!",
            author: "tim@hater.com"
          }
        ]
      }
    ];
})()
