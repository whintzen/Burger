// import orm.js into burger.js
var orm = require('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM.
var hamburger = 
{

  selectAll: function(callback)
  {
    orm.selectAll("hamburgers",function(res)
    {
      callback(res);
    });
  },

  insertOne: function(cols, vals, callback)
  {
    orm.insertOne("hamburgers", cols, vals, function(res)
    {
      callback(res);
    });
  },

  updateOne: function(objColVals, condition, callback)
  {
    orm.updateOne("hamburgers", objColVals, condition, function(res)
    {
      callback(res);
    });
  }  

};


// Export at the end of the burger.js file.
module.exports = hamburger;