var express = require("express");
// Import the model (hamburger.js) to use its database functions.

var hamburger = require("../models/hamburger.js");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  hamburger.selectAll(function(data) {
    //handlebars object
    var hdbrsObject = {
      hamburgers: data
    };
    console.log(hdbrsObject);
    res.render("index", hdbrsObject);
  });


  //Insert/ Add a new hamburger
  router.post("/api/hamburgers", function(req, res) {
    // hamburger.create([
      hamburger.insertOne(
        ["burger_name", "devoured"], 
        [req.body.burger_name, req.body.devoured], 
        function(result) {
      // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
  });

  // Update.  Make a change 
  router.put("/api/hamburgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    hamburger.updateOne(
        {devoured: req.body.devoured}, condition, function(result) {
          if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
  });

  router.delete("/api/hamburgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

      hamburger.deleteOne(condition, function(result) {
        if ((result.changedRows == 0)) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
  });

});

// Export routes for server.js to use.
module.exports = router;
