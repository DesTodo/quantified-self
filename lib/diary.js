$(document).ready(function(){
  $.get("https://hidden-shelf-49347.herokuapp.com/api/v1/meals")
    .then(function(foods){
      $("h2.left").append(foods[0].name)
      $("div.left").append($table.addClass("left"))
      var totalBreakfast = 0
      foods[0].foods.forEach(function(element) {
        $("table.left > tbody").append("<tr><td>" + element.name + "</td><td class='total'>" + element.calories + "</td></tr>")
        totalBreakfast += element.calories
      })
      $("table.left > tfoot > tr#total").append("<td>" + totalBreakfast + "</td>")
    })
    .catch(function(error){
      console.error(error)
    })
  $.get("https://hidden-shelf-49347.herokuapp.com/api/v1/meals")
    .then(function(foods){
      $("h2.right").append(foods[1].name)
      $("div.right").append($table1.addClass("right"))
      var totalSnack = 0
      foods[1].foods.forEach(function(element) {
        $("table.right > tbody").append("<tr><td>" + element.name + "</td><td>" + element.calories + "</td></tr>")
        totalSnack += element.calories
      })
      $("table.right > tfoot > tr#total").append("<td>" + totalSnack + "</td>")
    })
    .catch(function(error){
      console.error(error)
    })
  $.get("https://hidden-shelf-49347.herokuapp.com/api/v1/meals")
    .then(function(foods){
      $("h2.left1").append(foods[2].name)
      $("div.left1").append($table2.addClass("left1"))
      var totalLunch = 0
      foods[2].foods.forEach(function(element) {
        $("table.left1 > tbody").append("<tr><td>" + element.name + "</td><td>" + element.calories + "</td></tr>")
        totalLunch += element.calories
      })
      $("table.left1 > tfoot > tr#total").append("<td>" + totalLunch + "</td>")
    })
    .catch(function(error){
      console.error(error)
    })
  $.get("https://hidden-shelf-49347.herokuapp.com/api/v1/meals")
    .then(function(foods){
      $("h2.right1").append(foods[3].name)
      $("div.right1").append($table3.addClass("right1"))
      var totalDinner = 0
      foods[3].foods.forEach(function(element) {
        $("table.right1 > tbody").append("<tr><td>" + element.name + "</td><td>" + element.calories + "</td></tr>")
        totalDinner += element.calories
      })
      $("table.right1 > tfoot > tr#total").append("<td>" + totalDinner + "</td>")
    })
    .catch(function(error){
      console.error(error)
    })
})
var $table = $('<table/>').append(
  $("<thead/>").append(
    $("<tr/>").append(
      $("<th/>").text("Name"),
      $("<th/>").text("Calories"))),
  $("<tbody/>").append("<tr/>"),
  $("<tfoot/>").append(
    $("<tr/>", {
        id: "total"
      }).append(
      $("<th/>").text("Total Calories:")),
    $("<tr/>").append(
      $("<th/>").text("Remaining Calories:")))
)
var $table1 = $('<table/>').append(
  $("<thead/>").append(
    $("<tr/>").append(
      $("<th/>").text("Name"),
      $("<th/>").text("Calories"))),
  $("<tbody/>").append("<tr/>"),
  $("<tfoot/>").append(
    $("<tr/>", {
        id: "total"
      }).append(
      $("<th/>").text("Total Calories:")),
    $("<tr/>").append(
      $("<th/>").text("Remaining Calories:")))

)
var $table2 = $('<table/>').append(
  $("<thead/>").append(
    $("<tr/>").append(
      $("<th/>").text("Name"),
      $("<th/>").text("Calories"))),
  $("<tbody/>").append("<tr/>"),
  $("<tfoot/>").append(
    $("<tr/>", {
        id: "total"
      }).append(
      $("<th/>").text("Total Calories:")),
    $("<tr/>").append(
      $("<th/>").text("Remaining Calories:")))
)
var $table3 = $('<table/>').append(
  $("<thead/>").append(
    $("<tr/>").append(
      $("<th/>").text("Name"),
      $("<th/>").text("Calories"))),
  $("<tbody/>").append("<tr/>"),
  $("<tfoot/>").append(
    $("<tr/>", {
        id: "total"
      }).append(
      $("<th/>").text("Total Calories:")),
    $("<tr/>").append(
      $("<th/>").text("Remaining Calories:")))
)