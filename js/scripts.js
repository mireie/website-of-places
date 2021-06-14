// Business Logic for FavoritePlaces

function FavoritePlaces() {
  this.places = {};
  this.currentId=0;
}

FavoritePlaces.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

FavoritePlaces.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

FavoritePlaces.prototype.findPlace = function(id) {
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

$(document).ready(function() {
  $("form#user-entry").submit(function(event) {
    event.preventDefault();
    const userDate = $('#user-date').val();  //Example Input: 2021-06-01
    const userName = $('#user-name').val();
    const userPlace = $('#user-place').val(); 
    let newPlace = new Place(userDate,userName,userPlace);
    favoritePlaces.addPlace(newPlace);
    $(".output").toggle();
    $(".entry").toggle();
  });
  $(".output").click(function(event) {
    $(".output").slideToggle();
    $(".entry").slideToggle();
  });
});