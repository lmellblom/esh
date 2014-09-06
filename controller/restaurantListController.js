angular.module('Matt', [])
  .controller('restaurantListController', function($scope) {

    $scope.restaurants = 
    [
        {
          "OBJID": "2632",
          "NAMN": "104:ans Närbutik",
          "VERKSAM": "Livsmedelsbutik ej hantering",
          "VERKSAM_WEBKLASS": "BUTIKHANDEL",
          "BESADR": "Munkhagsgatan 104",
          "KONTROLL": "Kontroll utförd"
        },
        {
          "OBJID": "16844",
          "NAMN": "43:ans Kvarterskrog",
          "VERKSAM": "Restaurang",
          "VERKSAM_WEBKLASS": "RESTAURANG",
          "BESADR": "Nya Tanneforsvägen 43a"
        },
        {
          "OBJID": "24264",
          "NAMN": "68:ans Pizzeria och Restaurang",
          "VERKSAM": "Pizzeria",
          "VERKSAM_WEBKLASS": "RESTAURANG",
          "BESADR": "Rydsvägen 68d",
          "KONTROLL": "Kontroll utförd"
        },
        {
          "OBJID": "503",
          "NAMN": "7-Eleven Universitetssjukhus",
          "VERKSAM": "Livsmedelsbutik med hantering",
          "VERKSAM_WEBKLASS": "BUTIKHANDEL",
          "BESADR": "Sjukhusvägen 6",
          "KONTROLL": "Kontroll utförd"
        }
    ]

  });