$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).text().trim();
    // alert(newDevoured)
    if(newDevoured=== "Devour It!"){
      var newDevouredState = {
        devoured: 1
      };  
    }else{
      var newDevouredState = {
        devoured: 0
      };
    }
    

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured : false
      // newDevouredState: $("#devoured").val().trim()
    };
// console.log(burger_name)
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});



