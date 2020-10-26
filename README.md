# Burger  :hamburger: :fries:

Node Express Handlebars
A burger App with MySQL, Node, Express, Handlebars and an ORM. Uses Node and MySQL to query and route data in the app, and Handlebars to generate HTML.

## Concept
Eat-Da-Burger! is a restaurant app that lets users input the names of hamburgers they'd like to eat. Whenever a user submits a hamburger's name, the app will display the hamburger on the left side of the page, under "Hamburgers Available", these are waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.  The app will store every burger in a database, whether devoured or not.

## User Story
As a restuarant business owner
I want to be able to allow users to input the names of burgers they especially like, and make those choices available 
So that a user can select what burger they want to eat. 

## Set up Instructions 
* Design a Hamburger database schema containing a Hamburgers table:
   * Create the `hamburger_db`.
   * Switch to or use the `hamburger_db`.
   * Create a `hamburgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.

* Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

* Now you're going to run these SQL files.

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.

## How the Process Works
Open a terminal and run `node server.js`, this will connect you to the MySQL database on server PORT 8080.  Open a browser and type `http://localhost:8080/` or `localhost:8080` and hit enter.  This will display the Hamburger App page with the Hamburgers that you added to the Hamburger database, when you ran the Schema.sql and Seeds.sql. 
  * To Request a Hamburger:
    * In the `Request a Burger` input text box, enter the name of a hamburger that you would like to eat--
      By clicking on the `Make my Burger` submit button, this will add the choice to the `Hamburgers Available` area.
    
    * DataBase:
      * In the Hamburger database, Hamburgers table, the new hamburger will be added, and the Devoured field
        will contain a Zero (0) which means that the hamburger has a boolean value of `false` and that it was not Devoured as yet!!!. 

  * To Devour a Hamburger:
    * To eat or Devour a hamburger of your choice, click on the `Devour It` submit button and the burger will
      move from `Hamburgers Available` to the `Hamburgers Devoured` area.

    * DataBase:
      * In the Hamburger database, Hamburgers table, the Devoured hamburger's devoured field will be reassigned
        a new value. The Devoured field will now contain a One (1) which means that the hamburger has a boolean value of `true` and that it was Devoured!!!.

  Regardless of whether a hamburger is added or devoured, all hamburger information remains in the database.    

## Tools:
 * Node
 * Express
 * Handlebars
 * ORM
 * Models
 * Controllers          
 * Package json
 * MySQL WorkBench - in order to load and store the Hamburger data to the database
 * CSS 
 
## Links:
  * Github Repository: 
    [Github](https://github.com/whintzen/Burger.git)
  
  * Screencastify video: 
    [Video](https://drive.google.com/file/d/1RWtuk18CH5-SxUaRS9qCbb2eEGsJiuE9/view?usp=sharing) 

  * Portfolio Project: 
    [Portfolio](https://whintzen.github.io/HW_Portfolio/index.html)

  * ![Image of The Hamburger App](https://github.com/whintzen/Burger/blob/main/public/assets/images/BurgerApp_Screenshot.png)
  
