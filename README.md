
# SCSS Theme Boilerplate

Boilerplate code for a SCSS theme (usually used for OutSystems applications) compiled with Webpack.


## Installation

- Get npm and Node.js from https://www.npmjs.com/get-npm 

To check if you have Node.js, npm and npx installed on your machine, run:

```bash
  node -v
```

```bash
  npm -v
```

```bash
  npx -v
```

## How to run the project

- When running the project for the first time, head on over to your terminal and type:

```bash
  npm install
```
## Building

- To compile your SCSS and JavaScript code in development mode, head on over to your terminal and type:

```bash
  npm run build-dev
```
- To compile your SCSS and JavaScript code in production mode, head on over to your terminal and type:

```bash
  npm run build-prod
```

After this, you can check your compiled code on the CSS folder that is located inside of the dist folder that will be created on your project's root path


## Building & Starting the development server simultaneously

- To compile your SCSS and JavaScript code in development mode & start the development server, head on over to your terminal and type:

```bash
  npm run build-serve:dev
```