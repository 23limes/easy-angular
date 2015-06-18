# todo-angular

> This is a project template to help you in the process of starting, testing and completing a simple, but real-world angularJS application. This assumes you have node.js installed, if not please visit nodejs.org to install it for your platform.

### Install Dependencies

Install `yeoman`, `gulp`, `bower`
```
npm install -g yo gulp bower
```

Install the gulp-based generator for yeoman
```
npm install -g generator-gulp-angular
```

### Create Your Project

Make a new directory and `cd` into it
```
mkdir my-new-project && cd $_
```

Run `yo gulp-angular` and pass in your app name
```
yo gulp-angular app-name
```

### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in /dist
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
