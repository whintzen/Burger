//Import (require) connection.js into orm.js
var connection = require('./connection.js')

// Helper function for SQL syntax which will be used by the insertOne method.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function createQmark(num) {
    var arr = [];  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    } 
    // Return the array to a string 
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function translateSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string into an array
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }  
    // return/translate array of strings to a single comma-separated string
    return arr.toString();
}



//Create the methods that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and store data in your database.

var orm = 
{

    // selectAll from the Hamburgers table
    // 'SELECT * FROM hamburgers'

	selectAll: function(table, callback) {
        //mySQL Query
        var dbQuery = "SELECT * FROM " + table + ";";
        connection.query(dbQuery, function(err, result) {
			if (err) {
                throw err; 
            }
			callback(result);
		});
	},

    // insertOne a recored into the Hamburgers table
    // 'INSERT INTO hamburgers SET ?'
	insertOne: function(table, cols, vals, callback) {
       var dbQuery =  "INSERT INTO " + table + "(" + cols.toString() + ") " + "VALUES (" + createQmark(vals.length) + ") ";
        
       console.log(dbQuery);
       connection.query(dbQuery, vals,  function(err, result) {
			if (err) {
                throw err;
            }
			callback(result);
		});
				
	},

    // updateOne the Hamburgers table
    // 'UPDATE hamburgers SET ? WHERE ?' 
	updateOne: function(table, objColVals, condition, callback) {
        var dbQuery = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition; 
        
        console.log(dbQuery);
        connection.query(dbQuery, function(err, result) {
			if (err) {
                throw err;
            }
			callback(result);
		});
    },
    
    // deleteOne from the Hamburgers table
    // 'DELETE FROM hamburgers WHERE ?' 
   deleteOne: function(table, condition, callback) {
        var dbQuery = "DELETE FROM " + table + " WHERE " +  condition;
       
        console.log(dbQuery);
        connection.query(dbQuery, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};


// Export the ORM object in module.exports.
module.exports = orm;