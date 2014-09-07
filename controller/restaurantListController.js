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


  $scope.restaurants = [];

  // help functions! -------------------------------------------------------------
  function getOneRestaurant(objid) {
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }

    var url = "http://opendata.linkoping.se/ws_opendata/main.asmx/Livsmedelsobjekt?CustomKey=73857b55138a41aebd1958a1e9f1ebc1&objid=" + objid;

    xmlhttp.open("GET", url ,false);
    xmlhttp.send();

    var allInspections = []; // innehåller bara beslut
    var OBJID,NAMN,BESADR, KONTROLL,BESLUT;

    var x = xmlhttp.responseXML;

    var inspektioner = x.getElementsByTagName("Inspektion");
    if (inspektioner.length>0) {
      var beslut = inspektioner[inspektioner.length-1].getElementsByTagName("BESLUT")[0].firstChild.nodeValue;
      if (beslut == "Ingen_extrakontroll krävs") {
        BESLUT = 1;
      }
      else if (beslut == "Extrakontroll_krävs"){
        BESLUT = 2; 
      }
    }
    else {
      //BESLUT = "Ingen kontroll gjord";
      BESLUT = 0;
    }

    OBJID = x.getElementsByTagName("OBJID")[0].firstChild.nodeValue;
    NAMN = x.getElementsByTagName("NAMN")[0].firstChild.nodeValue;

    // to check if the nodevalue is empty or not
    if (x.getElementsByTagName('BESADR')[0].firstChild == null){
      BESADR = '"Adress saknas"';
    }
    else {
      BESADR = x.getElementsByTagName("BESADR")[0].firstChild.nodeValue;
    }

/* MAYBE USE LATER
    if (x.getElementsByTagName('KONTROLL')[0].firstChild == null){
      KONTROLL = "Ingen kontroll gjord";
    }
    else {
      KONTROLL = x.getElementsByTagName("KONTROLL")[0].firstChild.nodeValue;
    }
*/
    var info = {
      "OBJID" : OBJID,
      "NAMN" : NAMN,
      "BESADR" : BESADR,
      "BESLUT" : BESLUT // stores info 0,1,2 if there are no inspektions, no extra conroll och extra controll. 
    };

    return info;

  }  // end of function

  function getAllRestaurantsId() {

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    // get the whole URL
    var url = "http://opendata.linkoping.se/ws_opendata/main.asmx/LivsmedelsobjektAlla?CustomKey=73857b55138a41aebd1958a1e9f1ebc1";  
    xmlhttp.open("GET", url ,false);
    xmlhttp.send();

    // -----------------------

    var allRestaurants = [];

    // get all the objects that are livsmedelsobjekt
    var livs = xmlhttp.responseXML.getElementsByTagName("Livsmedelsobjekt");
    for (var i = 0; i < livs.length; i++) {
      var restaurang = livs[i].getElementsByTagName("VERKSAM_WEBKLASS")[0].firstChild.nodeValue;
      if (restaurang == "RESTAURANG") {
          var objid = livs[i].getElementsByTagName("OBJID")[0].firstChild.nodeValue;
          // save the objid on the objects that are restaurants
          allRestaurants.push(objid);  
    }
  }

  return allRestaurants; 
} // end of function

 // how to get one restaurant from the id in the list we have stored
// 13652
  // must have read all the restaurants first and stored in the variable restaurantList!
  function getRestaurantId(id) { // helpfunction
    rest = $scope.restaurants;
  return rest.filter(
      function(rest){return (rest.OBJID == id)}
  );
  }
  function getRestaurantById(id) { // USE THIS!!!
    return getRestaurantId(id)[0];

  }
  // end of function -------------------------------------

  function onLoadRestaurants() {
    console.log('test');
    var allRestaurants = getAllRestaurantsId(); // get all the IDs that are restaurants! 

    var howMany = allRestaurants.length;
    howMany = 100; // just so we dont load all the info now! CHANGE MAYBE LATER IF WE HAVE TIME!!

    // print howMany resturanats that we have specified.
  for (var i=0; i< howMany; i++){
    var oneRest = getOneRestaurant(allRestaurants[i]);
    oneRest["avgRating"]=Math.floor(Math.random()*4); // generates a random number between 0,1,2,3
    $scope.restaurants.push(oneRest); // skickar en restuarang!!
  }

  console.log($scope.restaurants);

}

// kanske fult men kör igång denna funktion...
onLoadRestaurants(); 

  this.displayRestaurant = function displayRestaurant(id) {
    var rest = getRestaurantById(id); // find the restaurant in the list
    $scope.id = rest.OBJID;
    $scope.name = rest.NAMN;
    $scope.address = rest.BESADR        
    //$scope.reviews = rest.ListReviews;
  };

  this.setEmotion = function setEmotion(index) { //TODO: set all images

  	if($scope.restaurants[index].avgRating == null) {
			return "../images/list/smiley_glad_listvy.svg"; //TODO: change to unknown
  	} else if($scope.restaurants[index].avgRating <2) {
  		return "../images/list/smiley_glad_listvy.svg";
  	} else {
  		return "../images/list/smiley_asglad_listvy.svg";
  	}  
  };

  this.setControllColor = function setControllColor(index) { //TODO: set all images
    var imgList = ["../images/list/kontroll_fragetecken_listvy.svg", "../images/list/kontroll_gron_listvy.svg","../images/list/kontroll_rod_listvy.svg" ];
    return imgList[$scope.restaurants[index].BESLUT]; 
  };

  /* function: onClick()
  On clicking on a specific restaurant, show restaurant detail view */
  this.click = function click(id) {
    console.log("id som skickades in: " + id);
  };



});