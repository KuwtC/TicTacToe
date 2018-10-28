# Administration Manual

## Setup

Since this application is written in [`node.js`](https://nodejs.org/en/), the node runtime environment has to be installed on the client's machine, as well as the node package manager [`npm`](https://www.npmjs.com/get-npm).  

Clone the application on [**github**](https://github.com/KuwtC/TicTacToe/) and initialize it with npm: `npm init` and `npm install`.

## Web application
### Deployment

To deploy the application, it has to build successfully on CircleCI before it gets deployed on Heroku.

### Run

To run the game on a local machine, the server has to be initialized with `npm start` to play the game on [`localhost:3000`] (http://localhost:3000/).  
The game can also be played online via the [Heroku app] (https://warm-reaches-16003.herokuapp.com/).

### Maintenance

To keep the application secure, stable, and up-to-date, it has to be maintained and monitored. It is important to update third party APIs regularly and implement new functionality. For app scaling, it might be necessary to change the setup accordingly.
