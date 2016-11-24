# js-dev-env
JS Development Environment

### Run Application ###
To install npm: npm install
To start the server: npm start -s

### Start the Express Server ###
To start server with node: node buildScripts/srcServer.js

## Localtunnel ###
To install localtunnel: npm install localtunnel -g
To use localtunnel via npm: npm run share

### Security Check###
To install security check: npm install nsp -g
To run security check directly: nsp check
To run a security check via npm: npm run security-check

### Linting ###
To run lint: npm run lint
To run lint:watch: npm run lint:watch

### Linting ###
To run mocha tests: npm test OR npm t

### Generate Mock Data ###
To generate mock data: npm run generate-mock-data
To start your server for the generate api: npm run start-mockapi

### Build Production ###
npm run build -s

### Deployment Notes ###
Development: npm start
Production build: npm run build
Production deploy: npm run deploy

### Notes ###
Always try to build static domains (Then you can use something like surge to host your site.)

