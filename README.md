# JUMGA

> **This react application contains the Jumga Ecommerce Store.**

## Clone the repo

If you haven't done so yet:

- [Install Git](http://git-scm.com/downloads)
- [Install Node](https://nodejs.org/en/download/)

Then clone this repo to your local machine to get started.

## Build and Run

1 - Install all dependencies associated with the application.

### `npm install`

Installs all dependencies associated with the application.

### `npm start`

This runs the application in development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The webpack dev server will reload if you make edits.

## Options

### `npm run build`

Builds the application locally
Including minified JS/CSS/HTML as well as compressed text using Brotli/Gzip compression

### `npm run build:config:test`

This generates a config.js file which is placed in the root of the src folder. The file exports all of the test environment's configurations for use within the application.

### `npm run build:config:prod`

This generates a config.js file which is placed in the root of the src folder. The file exports all of the production environment's configurations for use within the application.

### `npm run build:config:local`

This generates a config.js file which is placed in the root of the src folder. The file exports all of the test environment's configurations for use within the application locally.

### `npm run deploy:test`

It attempts to generate the config file for the test environment, then builds the application using this configuration and finally deploys the application (build folder) to Firebase Hosting within the test environment.

### `npm run deploy:prod`

It attempts to generate the config file for the production environment, then builds the application using this configuration and finally deploys the application (build folder) to Firebase Hosting within the production environment.

### Use of Firebase CI

For details on generating the config file and its usage. Visit [Firebase CI](https://www.npmjs.com/package/firebase-ci)

## Project Styling

This application uses Bootstrap/ReactStrap and styled components for component styling and theming.
