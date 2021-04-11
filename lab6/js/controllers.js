var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope)
{
    $scope.galleries = 
    [
        { 'title':'CLA-2A',
        'when':'dzis',
        'thumbnailUrl':'img/galeria/cla.jpg'
        },
        { 'title':'H-Delay',
        'when':'dzis',
        'thumbnailUrl':'img/galeria/del.jpg'
        },
        { 'title':'Doubler',
        'when':'dzis',
        'thumbnailUrl':'img/galeria/dob.jpg'
        },
        { 'title':'Neutron EQ',
        'when':'dzis',
        'thumbnailUrl':'img/galeria/eq.jpg'
        },
        { 'title':'Valhalla Reverb',
        'when':'dzis',
        'thumbnailUrl':'img/galeria/rev.jpg'
        },
        { 'title':'SSL EQ',
        'when':'dzis',
        'thumbnailUrl':'img/galeria/ssl.png'
        }
    ];
    $scope.galleries.length;
});