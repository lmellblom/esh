angular.module('Matt', [])
  .controller('restaurantListController', function($scope) {

	$scope.sometext = "I like this text";
	
  $scope.id = ""; //int
	$scope.name = ""; //string
	$scope.address = ""; //restaurant address
	$scope.controllStatus = ""; //status from livsmedelsinspektionen
	$scope.avgRating; //smiley avgRating
	$scope.noOfRatings;  //int
	$scope.attributes; //array of attributes
	$scope.reviews; //array of reviews
	$scope.emotion;
	$scope.controlColor;
	$scope.showList = true;
	$scope.showDetail = false;

	$scope.inspections = 
	[
		{
	    "OBJID": "2632",
	    "INSPEKTIONSID": "274367",
	    "BESLUT": "Ingen_extrakontroll krävs",
	    "INSPEKTIONSDATUM": "20130417",
	    "INSPEKTIONSTYP": "Inspektion",
	    "INSPEKTION_OANMALD": "Oanmäld",
	    "SYFTE": "Ordinarie kontroll"
		},
		{
	    "OBJID": "24264",
	    "INSPEKTIONSID": "293258",
	    "BESLUT": "Ingen_extrakontroll krävs",
	    "INSPEKTIONSDATUM": "20140220",
	    "INSPEKTIONSTYP": "Inspektion",
	    "INSPEKTION_OANMALD": "Oanmäld",
	    "SYFTE": "Ordinarie kontroll"
  	},
  	{
	    "OBJID": "503",
	    "INSPEKTIONSID": "292425",
	    "BESLUT": "Ingen_extrakontroll krävs",
	    "INSPEKTIONSDATUM": "20140213",
	    "INSPEKTIONSTYP": "Revision",
	    "INSPEKTION_OANMALD": "Anmäld",
	    "SYFTE": "Ordinarie kontroll"
  	},
  	{
	    "OBJID": "467",
	    "INSPEKTIONSID": "282685",
	    "BESLUT": "Ingen_extrakontroll krävs",
	    "INSPEKTIONSDATUM": "20130917",
	    "INSPEKTIONSTYP": "Inspektion",
	    "INSPEKTION_OANMALD": "Oanmäld",
	    "SYFTE": "Ordinarie kontroll",
	    "ListaAvvikelser": {
		      "Avvikelse": {
		        "INSPEKTIONSID": "282685",
		        "AVVIKELSE_GRUPP": "06",
		        "AVVIKELSE_DETALJID": "0602",
		        "AVVIKELSE": "Övrigt"
		      }
		    }
  	},
  	{
	    "OBJID": "23571",
	    "INSPEKTIONSID": "302276",
	    "BESLUT": "Extrakontroll_krävs",
	    "INSPEKTIONSDATUM": "20140624",
	    "INSPEKTIONSTYP": "Inspektion",
	    "INSPEKTION_OANMALD": "Oanmäld",
	    "SYFTE": "Ordinarie kontroll",
	    "ListaAvvikelser": {
		      "Avvikelse": {
		        "INSPEKTIONSID": "302276",
		        "AVVIKELSE_GRUPP": "03",
		        "AVVIKELSE_DETALJID": "0301",
		        "AVVIKELSE": "Rutin - mikrobiologi"
		      }
		    }
  	}
	]

  $scope.restaurants = 
  [
    {
      "OBJID": "2632",
      "NAMN": "104:ans Närbutik",
      "VERKSAM": "Livsmedelsbutik ej hantering",
      "VERKSAM_WEBKLASS": "BUTIKHANDEL",
      "BESADR": "Munkhagsgatan 104",
      "KONTROLL": "Kontroll utförd",
      "avgRating": "3"
    },
    {
      "OBJID": "16844", //Saknas kontroll!
      "NAMN": "43:ans Kvarterskrog",
      "VERKSAM": "Restaurang",
      "VERKSAM_WEBKLASS": "RESTAURANG",
      "BESADR": "Nya Tanneforsvägen 43a",
      "avgRating": "1",
      "controllStatus": "3",
      "attributes": {
  			"1": "false",
  			"2": "true",
  			"3": "true",
  			"attr": "false",
  			"attr": "true",
  			"attr": "true"      	
      },
      "listReviews": {
      	"review": {
      		"reviewId": "12",
      		"userName": "Olivia",
      		"restaurantId": "16844",
      		"rating": "4",
      		"comment": "Det är min absoluta favoritrestaurang!",
      		"givenAttributes": {
      			"attr": "false",
      			"attr": "true",
      			"attr": "true",
      			"attr": "false",
      			"attr": "true",
      			"attr": "true"
      		}
      	},
      	"review": {
      		"reviewId": "13",
      		"userName": "Linnea",
      		"restaurantId": "16844",
      		"rating": "2",
      		"comment": "Typisk käck kvarterskrog!",
      		"givenAttributes": {
      			"attr": "false",
      			"attr": "false",
      			"attr": "true",
      			"attr": "true",
      			"attr": "false",
      			"attr": "false"
      		}
      	},
      	"review": {
      		"reviewId": "14",
      		"userName": "Johan",
      		"restaurantId": "16844",
      		"rating": "4",
      		"comment": "This is the sweetest place!",
      		"picture": "/images/userImages/johan.jpg",
      		"givenAttributes": {
      			"attr": "false",
      			"attr": "false",
      			"attr": "true",
      			"attr": "true",
      			"attr": "false",
      			"attr": "false"
      		}
      	}
      }
    },
    {
      "OBJID": "24264",
      "NAMN": "68:ans Pizzeria och Restaurang",
      "VERKSAM": "Pizzeria",
      "VERKSAM_WEBKLASS": "RESTAURANG",
      "BESADR": "Rydsvägen 68d",
      "KONTROLL": "Kontroll utförd",
      "avgRating": "1"
    },
    {
      "OBJID": "503",
      "NAMN": "7-Eleven Universitetssjukhus",
      "VERKSAM": "Livsmedelsbutik med hantering",
      "VERKSAM_WEBKLASS": "BUTIKHANDEL",
      "BESADR": "Sjukhusvägen 6",
      "KONTROLL": "Kontroll utförd",
      "controllStatus": "1"
    },
    {
	    "OBJID": "23571",
	    "NAMN": "Naked Juicebar",
	    "VERKSAM": "Café",
	    "VERKSAM_WEBKLASS": "RESTAURANG",
	    "BESADR": "Nygatan 22",
	    "KONTROLL": "Kontroll utförd",
	    "controllStatus": "2"
  	}
  ]

  this.displayRestaurant = function displayRestaurant(id) {

  	for(var i=0; i<$scope.restaurants.length; i++) {
  		if($scope.restaurants[i].OBJID == id) {
  			$scope.id = $scope.restaurants[i].OBJID;
  			$scope.name = $scope.restaurants[i].NAMN;
  			$scope.address = $scope.restaurants[i].BESADR;
  			$scope.attributes = $scope.restaurants[i].attributes;
  			$scope.reviews = $scope.restaurants[i].listReviews;
  			$scope.emotion = this.setEmotion(i);
  			$scope.controlColor = this.setControllColor(i);
  			console.log($scope.emotion);
			}
		}

		//TODO: put this in initialisation 
		for(var i=0; i<$scope.inspections.length; i++) {
  		if($scope.inspections[i].OBJID == id) {
  			if($scope.inspections[i].BESLUT == "Ingen_extrakontroll krävs") {
  				$scope.controllStatus = 1; //green
  			} else if ($scope.inspections[i].BESLUT == "Extrakontroll_krävs") {
  				$scope.controllStatus = 2; //yellow 
  			} else {
  				$scope.controllStatus = 3; //unknown
  			}
  		}
  	}
  };

  this.setEmotion = function setEmotion(index) { //TODO: set all images

  	if($scope.restaurants[index].avgRating == null) {
			return "images/list/kontroll_gron_listvy.svg"; //TODO: change to unknown
  	} else if($scope.restaurants[index].avgRating <2) {
  		return "images/list/smiley_glad_listvy.svg";
  	} else {
  		return "images/list/smiley_asglad_listvy.svg";
  	}
  };

  this.setControllColor = function setControllColor(index) { //TODO: set all images

  	if($scope.restaurants[index].controllStatus == null) {
  		return "images/list/smiley_glad_listvy.svg";
  	} else if($scope.restaurants[index].controllStatus == 1) {
  		return "images/list/kontroll_gron_listvy.svg";
  	} else if ($scope.restaurants[index].controllStatus == 2) {
  			return "images/list/kontroll_rod_listvy.svg";
  	} else {
  		return "images/list/smiley_glad_listvy.svg";
  	}
  };

  /* function: onClick()
  On clicking on a specific restaurant, show restaurant detail view */
  this.click = function click(id) {

  	$scope.showList = false;
  	$scope.showDetail = true;
		$scope.sometext = "I hate this text";
		this.displayRestaurant(id);
  };
});