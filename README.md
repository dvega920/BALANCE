# Project-2
# BALANCE
## Group Project-2 - BALANCE
# Members
## David Vega
## Mandolin Foster
## Adam Toomey
## Jamie Morris

* ['Project-2 - BALANCE - Git Hub'](https://github.com/dvega920/BALANCE)
* ['Project-2 - BALANCE - Git Hub IO'](https://dvega920.github.io/BALANCE/)
* ['Project-2 - BALANCE - Heroku'](https://radiant-plains-19401.herokuapp.com/)
* ['Project-2 - BALANCE - Demo Video'](https://drive.google.com/file/d/19C2XH2Gyb7xl5vr2OkOyy9X45SbsmsHQ/view)
* ['Project-2 - BALANCE - Prototype'](https://drive.google.com/file/d/1PexQTvkab1gUu6sVF-98MZOOHGslAe1Y/view)



### Summary
* HTML and CSS and Javascript documents create a comprehensive website for mood and activity tracking.
* This project emphasizes the use of api-routes and html-routes as well as the MVC format
* This project utilizes the use of npm packages: sequelize and express
* This project utilizes the use of Models to populate database

### This project has the following features: 
* An Index page
    * This has easy navigation using a nav bar, and hyperlinked sections summarizing its features
    * This page directs a user to get started
* An About page
    * This has personal bios of each team member
* A Contact Us page
    * This uses provides a contact page for the user
 * A Resources page
    * This provides mental health resources for the user
* A Track page
    * This captures user data by selecting an emoji
    * Data then populates the "moods" table in the balance database
    * This page redirects user to activities page
* An Activities page
    * This captures user data by select an activity icon
    * Data then populates the "activity" table in the balance database
    * This page redirects user to reports page
* A Reports page
    * This populates two graphs from the user data in the database
    * This shows the user a summary of both their moods and activities 
    * This uses API GET and POST resquests using axios

### Psuedo code:  
## Application Requirements
* Must use a Node and Express server
* Must be backed by a MySQL database and an ORM (not necessarily Sequelize)
* Must utilize both GET and POST routes for retrieving and adding new data
* Must be deployed using Heroku (with data)
* Must utilize at least one new third-party API
* Must have a polished UI
* Must use a CSS framework other than Bootstrap
* Must follow MVC paradigm
* Must meet good quality coding standards (indentation, scoping, naming)

### This project has Models for:
* Index for Sequelize set up
* Activity Table
* Mood Table 

### This project features responsive design
### Has responsive layout for: 
* Small devices (landscape phones, 576px and up)
* Medium devices (tablets, 768px and up)
* Large devices (desktops, 992px and up)
* Extra large devices (large desktops, 1200px and up)
* Foundation Media Query for 40em

### To Execute File:
> Open in browser

### Features: 
* Seven HTML Pages
    * Index.html 
    * about.html
    * contactUs.html
    * resources.html
    * track.html
    * activities.html
    * reports.html
* One CSS Page
    * Styles.css
    * Materalize CSS files
* Six Public Javascript Pages
    * init.js
    * track.js
    * activities.js
    * reports.js
* Three Route Javascript Pages
    * api-routes.js
    * html-routes.js
    * index.js
* One Server file
    * server.js
* One Config file
    * config.js
* One Database file
    * Schema.sql



# Instructions for template use and deployment
# **Full-Stack Sequelize Template**
this template is meant to get you up-and-running with a full-stack web application scaffolded out and ready to run using node, express, and sequelize.  happy coding.

### **Useful Features**
* 'dotenv' environmental variables package configured for sequelize
* nodemon package configured
* ESlint package configured for Airbnb styleguide
* heroku-deployment ready
* instructions to create separate development and production databases
* instructions for migrating and seeding databases

### **How to Use This Template**
* click "use template" next to the clone button, this will create a new repository on *your* github account
* clone the repository down to your machine
* run the `schema.sql` query in the mySQL tool of your choice  
* run &nbsp; `npm install`
* run &nbsp; `touch .env` &nbsp;in the root of your repository
* open the .env file
* add the four environmental variables that will be used to connect to the database:
    <br/>       `DB_PASSWORD=yourpassword`
    <br/>       `DB_HOST=127.0.0.1`
    <br/>       `DB_USER=root`
    <br/>       `DB_NAME=sample_db`
* run &nbsp; `npm start` to start the server with nodemon which will automatically refresh after any server-side code changes
* ***check out the optional migrations and heroku deployment guides below!***

![image](./public/assets/images/dotenv.png)

### **Optional Database Migrations and Seeding**
#### ***Hey, this part can be confusing and is waaay beyond the scope of this readme to fully explain...if you choose to implement this useful functionality, you will need to refer to the documentation!***
***If you dont want to set up migrations at the moment, you can always come back to it, just skip ahead to the "Heroku Deployment" section***
* Sequelize-cli allows you to create models and seed your database from the command line
* This will allow you to pre-fill your database for development, as well as provide a consistent data set for testing accross multiple collaborators
* Please refer to the instructions below and [Sequelize migrations documentation](https://sequelize.org/master/manual/migrations.html#bootstrapping) to configure this project for migrations

### **Optional Instructions for Implementing Migrations**
* run two sequelize-cli commands to initialize the migrations and seeders folders

        npx sequelize-cli init:migrations

  and 

        npx sequelize-cli init:seeders

* run 

        npx sequelize-cli model:generate --name <ModelName> --attributes <someAttribute>:string,<anotherAttribute>:boolean

    entering in the model name and the attribute you are initializing it with - for example: 

        npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

* this will create the model in the models folder, and a migration file in the migrations folder.
* you will need to go to the model file and finish setting it up, add validation, etc.
* you will also need to set up your migrations file to match your model before running the migration
* Once you have set up your model and matching migration, you can run the migration to create the table in your database:
            
        npx sequelize-cli db:migrate

* Next we will create a seed file that will allow us to populate the table with a dataset on command, allowing us to share a consistent dataset accross collaborators, as well as revert the table back to a clean state after testing.

        npx sequelize-cli seed:generate <SEED NAME HERE, EX. DEMO-USER>

* Open the seed file created in the seeders folder and set up your seed data. for example:

![image](./public/assets/images/seeder-file.png)

* once you have filled in your seed file you can run it:

        npx sequelize-cli db:seed:all

* you are now all set to push everything up to github and continue with the steps below to deploy to heroku.
* the final step will be to seed your production database as well.  See the optional last step in the heroku deployment section.

### **Heroku Deployment**
* you may need to log into the heroku cli, do so by running &nbsp; `heroku login` &nbsp; in the terminal, you will also need the heroku website so might as well log in there too
* run &nbsp;`heroku create` in the root of your project repository.
* you can now run `git push heroku master` to push your application to heroku in its current state.  You will need to do this each time you wish to rebuild your heroku deployment.  You can also set up your repository to automatically push to heroku when you push to github -look around, you will find it!
* select your application on the heroku website
* click "Configure Add-ons"
* type "JawsDB" into the search bar, select "JawsDB MySQL" and provision the "Kitefin Shared - Free" default option
* open the JawsDB instance you have created by clicking on it
* you will be brought to a page with the connection information for your deployed database, which you will need to establish a connection to your production database in the MySQL management tool of your choice

![image](./public/assets/images/JawsDB-connection-info.png)

* now it is time to create an instance of your production database in your MySQL management tool.  The following instructions are specifically for MySQL Workbench, but they should apply in a general sense to any tool you are using.
* create a new MySQL connection instance

![image](./public/assets/images/new-connection.png)

* give your connection a meaningful name, then using the information from the JawsDB Connection Info page, fill in the connection information on the new connection dialog, click the "store in keychain" button and store your password

![image](./public/assets/images/new-con-setup.png)

* test you connection by clicking the "Test Connection" button at the bottom of the dialog
* if your connection fails, double check that you copied the information correctly
* if your connection succeeds, click into the instance
* don't be alarmed if your schemas panel looks like this, you will still be able to view and query the database: 

![image](./public/assets/images/no-fetch.png)

* to run queries, dont forget your `USE <DATABASE NAME>;` statement, using the database name you see in the schemas panel:

![image](./public/assets/images/db-name.png)

* now you can manage your deployed production database!
* ***Optional last steps when using migrations:***
* To seed your production database, add the following line to the scripts in the &nbsp; `package.json` &nbsp; file, right below the start script:

        "heroku-postbuild": "npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"

* save and commit your changes to github, then run another

        git push heroku master

    to push the changes to heroku and run a fresh build.  The script that was added will run the migration and seed at the end of the heroku build.
* `select * ...` &nbsp; within your database management tool to see your freshly seeded production database!  Note that the database will be re-seeded each time you run a build, and the build ***does not*** drop the table automatically.  So to avoid doubling your data set, drop the table prior to running another build (you can use your management tool for this).  If you do not wish to continue re-seeding your production database, as you surely will at some point, just remove the `"heroku-postbuild"` script from the `package.json` file.

### **Notes About This Database Configuration**
* you now have two databases, a local development database and a deployed production database
* when running your application locally as you develop, it will connect to the local development database using the credentials you supplied in your .env file
* the heroku-deployed application will connect automatically to the deployed production database
* if at any point you with to revert to a clean data set, run the migration/seeder instructions above.  Heroku has a cli that can be accessed by running

        heroku run bash <name of application>
  this will allow you to run the migration and seed commands on the production database manually by running the `npx sequelize-cli...` commands detailed above.
* remember that the heroku postbuild script in the package.json file is optional and may or may not be worth keeping in for you if you use the heroku cli tool.  It will append the seedfile dataset to the database each time the application is pushed to heroku.  You can also drop the table using your management tool prior to running another heroku build.

### **To Disable ESLint**
* delete the .eslintrc.js file
* run &nbsp; `npm uninstall eslint`

### **Links and Resources**
* [eslint Getting started page](https://eslint.org/docs/user-guide/getting-started)
* [dotenv NPM Documentation](https://www.npmjs.com/package/dotenv)
* [airbnb styleguide documentation](https://github.com/airbnb/javascript)
