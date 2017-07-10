# Trending (client website)
Vote for your favourite topics, get list of most trending topics.

### Requirements

 - Maintain a list of topics and its upvotes/downvotes
 - Allow the user to submit topics. For this challenge, a “topic” is simply a string that does not exceed 255 characters.
 - Allow the user to upvote or downvote a topic. For this challenge, the user may upvote or downvote the same topic multiple times.
 - Always return a list of top 20 topics (sorted by upvotes, descending) on the homepage
 - In-memory: Design an in-memory data structure (shared by the same process as your application) that will allow you to keep the topics in memory without using data persistence. It is okay for the topics to disappear after the application restarts. You may use data structures provided by your language’s standard library to build your data structure. Please note that in-memory data structure stores such as Redis and relational databases are not allowed.

### Implementation
 - Using Angular as application framework.
 - Using Sass for styling.
 - Webpack is used for bundling AOT and JIT compiled modules.
 - Typescript for defining modules, components, services and directives.
 - Used Angular Official Docs and AnuglarStarter as reference to create the project skeleton.
 
### Deployment
This project uses webpack to bundle the modules. Webpack configuration supports both AOT and JIT compiled bundles. Configuration options are present in

```
webpack.config.js
config/
```
This application was tested successfully on **NodeJs v6.0.0**

Install node dependencies with

```
npm install
```

To start a webpack-dev-server run.

```
npm run start
```
####Deployment on Heroku####

To deploy on heroku bundle the JIT or AOT version of code.

For JIT version
```
npm run build
```

For AOT version
```
npm run build:aot
```

Copy the dist folder into a repo that you will use with heroku and follow this guide
http://blog.teamtreehouse.com/deploy-static-site-heroku

***Note that*** Update the baseUrl value in config file located at ```src/app/service/app.config.ts``` on point to right backend server url.
