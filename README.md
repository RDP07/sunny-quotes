## Sunny Quotes - It's Always Sunny in Philadelphia Quote Generator

V2.0 - The app has been fully converted to a React application running on a Node application. No more JQuery or AWS for the images. Instead I am using webpack to bundle the project and run then run it on the Node application.

Check out this web app I built. It's a quote generator with quotes from it's always sunny in Philadelphia! It's built purely on HTML5, CSS3, JavaScript, and JQuery. I used JQuery and $.getJSON to query the API and used AWS for some of the cloud hosting. I also set it up for the "author" of each quote to have there headshot pop up underneath the quote everytime one they have said comes up. -> This was the v1.0 description when I was self-teaching myslef how to code


This is a public facing marketing website maintained by the front end engineering team.

**Table of Contents:**

* [Getting Started](#getting-started)
* [Installing Dependencies](#installing-dependencies)
* [Run / Build the Project](#build--run-the-project-development)

#### Getting Started

You will need at least the LTS versions of Node/NPM to run this project running on a Node application. The project currently relies on Node `v8.9.1` and NPM `v5.5.1` to run. This is most important when ES6 features are used within Node. Some of these features were not made available natively to Node until `v7.0.0+` or later.

We highly advise using [NVM (Node Version Manager)](https://github.com/creationix/nvm) locally. Do **not** use Homebrew to install NVM. It's known to be unstable.

Application environments (will) use Docker containers in order to install the appropiate version over time.

To pull/clone the project you can simply click download or in terminal navigate to the local folder you would like to save the project and run the command:

```
git clone origin https://github.com/RDP07/sunny-quotes.git
```

### Installing Dependencies

Once the repo has been pulled down locally you will need to make sure all the dependencies needed are installed. To do this run:

```
npm install
```

If a particular dependency is missing for a project dependency, you can manually install said package to fix it. Optionally, you can install some packages globally with the `-g` flag at the end of any install command.

If a particular package is not included in the package.json but required for building or running the application, install it! (Commit, push, PR, etc.)

```
npm install <PackageName>
```


### Build / Run the Project

With this app being a simple static Express app it only requires one command to start the project. After pulling the project and running ```npm install```, simply run:

```
npm run watch
```
and the project will be running locally on port 3000


Written and Coded by RDP07
