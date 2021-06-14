// Business Logic for FavoritePlaces

function FavoritePlaces() {
  this.places = {};
  this.currentId = 0;
}

FavoritePlaces.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

FavoritePlaces.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

FavoritePlaces.prototype.findPlace = function (id) {
  if (this.places[id] != undefined) {
    return this.places[id];
  }
  return false;
};

// Business Logic for Places

function Place(userName, userDate, userPlace) {
  this.userName = userName;
  this.userDate = userDate;
  this.userPlace = userPlace;
}

// Interface Logic
let favoritePlaces = new FavoritePlaces();

function displayPlaceDetails(placeToDisplay) {
  let placesList = $('ul#places');
  let htmlForPlaceInfo = "";
  Object.keys(placeToDisplay.places).forEach(function(key) {
    const place = placeToDisplay.findPlace(key);
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.placeName + "</li";
  });
  placesList.html(htmlForPlaceInfo);
}

function showPlace(placeId) {
  const place = favoritePlaces.findPlace(placeId);
  $('.user-name').html(place.userName);
  $('.user-date').html(place.userDate);
  $('.user-place').html(place.userPlace);
}

$(document).ready(function () {
  $("form#user-entry").submit(function (event) {
    event.preventDefault();
    const userDate = $('#user-date').val();  //Example Input: 2021-06-01
    const userName = $('#user-name').val();
    const userPlace = $('#user-place').val();
    let newPlace = new Place(userName, userDate, userPlace);
    favoritePlaces.addPlace(newPlace);
    $(".output").show();
    $(".entry").hide();
  });
  $(".output").click(function (event) {
    $(".output").hide();
    $(".entry").show();
  });

});