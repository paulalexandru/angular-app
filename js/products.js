(function(){
    var app = angular.module('store-products', []);

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        }

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }
    });

    app.controller('GalleryController', function(){
        this.current = 0;

        this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
        }
    });

    app.directive('productTitle', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/product-title.html'
        }
    });

    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/product-panels.html',
            controller: 'PanelController',
            controllerAs: 'panel'
        }
    });

    app.directive('productGallery', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/product-gallery.html',
            controller: 'GalleryController',
            controllerAs: 'gallery'
        };
    })
})();
