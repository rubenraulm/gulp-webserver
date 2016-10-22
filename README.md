# gulp webserver - HTML modules

> an example of gulp webserver project with modules

## About

This is just a simple [gulp](https://github.com/gulpjs/gulp) web server setup. It is very useful when you work on a large project. The principle here is that you can create modules (html pages) that can be added multiple times in many pages.

## Install
```
npm install
gulp build
gulp watch
```

## Modules

The modules are located in `src/html/modules/`.
HTML modules can be added inside `.shtml` pages like this `<!--#include virtual="modules/module-stage.html" -->`


## Tasks
```
gulp build -> will build the project
gulp watch -> will trigger gulp build & gulp watch
gulp build:prod -> will build the project for production (cleanCSS, uglify)
```

## License

[MIT](./LICENSE) © 2016 [rubenraulm](https://github.com/rubenraulm)
