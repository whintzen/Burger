$(function() {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newHamburger = {
          burger_name: $("#newburger")
          .val()
          .trim(),
          devoured: 0 
        };
    
        // Send the POST request to add a new Hamburger.
        $.ajax("/api/hamburgers", {
          type: "POST",
          data: newHamburger
        }).then(function() {
            console.log("created new hamburger");
            // Reload the page to get the updated list
            location.reload();
          });
    });
        //Devour the Hamburger
    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
        devoured: 1  //Set to True
      };
  
      // Send the PUT request to perform an update/change.
      $.ajax("/api/hamburgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
          console.log("Hamburger Devoured");
          // Reload the page to get the updated list
          location.reload();
        });
    });
     
    //Delete the hamburger
    $(".delete-hamburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax({
        type: "DELETE",
        url: "/api/hamburgers/" + id
      }).then(location.reload());
    });
});