# Burger

Node Express Handlebars
A burger App with MySQL, Node, Express, Handlebars and an ORM. Uses Node and MySQL to query and route data in the app, and Handlebars to generate HTML.

# Concept
Eat-Da-Burger! is a restaurant app that lets users input the names of hamburgers they'd like to eat. Whenever a user submits a hamburger's name, the app will display the hamburger on the left side of the page, under "Hamburgers Available", these are waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.  The app will store every burger in a database, whether devoured or not.

# User Story
As a restuarant business owner
I want to be able to allow users to input the names of burgers they especially like, and make those choices available 
So that a user can select what burger they want to eat. 

## Instructions
Design a Hamburger database schema containing a Hamburgers table:
   * Create the `hamburgers_db`.
   * Switch to or use the `hamburgers_db`.
   * Create a `hamburgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.

## How the Process Works



3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.

4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

5. Now you're going to run these SQL files.

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.

# How the Process Works
    

# Tools:
 * Node
 * Express
 * Handlebars
 * ORM
 * Models
 * Controllers          
 * Package json
 * MySQL WorkBench - in order to load and store the Hamburger data to the database
 * CSS 
   
# Links:
    GitHub Repository: https://github.com/whintzen/Burger
    
    Screencastify video: 
    https://drive.google.com/file/d/16jBn-hIE4odr2f1qco4GwBjGYVXXv5zV/view  
    
    