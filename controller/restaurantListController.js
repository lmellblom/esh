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
      "KONTROLL": "Kontroll utförd"
    },
    {
      "OBJID": "16844", //Saknas kontroll!
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
    },
    {
	    "OBJID": "23571",
	    "NAMN": "Naked Juicebar",
	    "VERKSAM": "Café",
	    "VERKSAM_WEBKLASS": "RESTAURANG",
	    "BESADR": "Nygatan 22",
	    "KONTROLL": "Kontroll utförd"
  	}
  ]

  this.displayRestaurant = function displayRestaurant(id) {

  	for(var i=0; i<$scope.restaurants.length; i++) {
  		if($scope.restaurants[i].OBJID == id) {
  			$scope.id = $scope.restaurants[i].OBJID;
  			$scope.name = $scope.restaurants[i].NAMN;
  			$scope.address = $scope.restaurants[i].BESADR;
			}
		}
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


  /* function: onClick()
  On clicking on a specific restaurant, show restaurant detail view */
  this.click = function click(id) {

		$scope.sometext = "I hate this text";
		console.log("in onClick");
		this.displayRestaurant(id);
  };

  /*
  this.getRestaurants = function getRestaurants() {

        //var request = "http://opendata.linkoping.se/ws_opendata/main.asmx/LivsmedelsobjektAlla?CustomKey=73857b55138a41aebd1958a1e9f1ebc1";
        var request = "http://opendata.linkoping.se/ws_opendata/main.asmx/Livsmedelsobjekt?CustomKey=73857b55138a41aebd1958a1e9f1ebc1&objid=433";
        if (window.XMLHttpRequest)
        {
            xhttp=new XMLHttpRequest();
        }
        else // code for IE5 and IE6
        {
          xhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.open("GET",request,false);
        xhttp.send();
        xmlDoc=xhttp.responseXML;

        console.log(this.xmlToJson(xmlDoc.firstNode));

	};*/

});

