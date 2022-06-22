# Modules Eager Loading, Preloading and Lazy Loading
### Created By [Sangwin Gawande](https://sangw.in)


I have created this project to understand how **Eager Loading**, **Preloading** and **Lazy Loading** of modules works in Angular.

## Eagerly Loading

Eagerly Loading in Angular means that Modules are loaded as soon as the application loads. By default, Angular uses eager loading to load modules.

## Preloading

Preloading in Angular means loading the Lazy loaded Modules in the background asynchronously, while user is interacting with the app.

## Lazy Loading

Lazy loading in Angular is an approach to limit the modules that are loaded to the ones that the user currently needs. This can improve your application's performance and reduce the initial bundle size.


-------

### Examples shown in the Demo 

##### AuthModule : Default Module

##### AdminModule : Custom Preloading

##### DashboardModule : Custom Preloading

##### ProductsModule : Lazy loaded

-------
## Run the Application


Run `npm install` and then `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. 

Go to inspect element and open console/network tab and check the logs for Preloading of the modules

You can modify `app/custom-preloading-strategy.ts` and `app/app-routing.module.ts` files as per your requirements and see the effects.

The application will automatically reload if you change any of the source files.

Check the demo out and let me know if it helps you too.

### [Click Here for DEMO](https://blog.sangw.in/ng-preloading-modules/)


[https://sangw.in](https://sangw.in)

-------

# NG Loading Modules in Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

------------


![visitors](https://img.shields.io/badge/dynamic/json?color=badge&label=Thank%20you%20for%20visiting%20%28Since%20June%202022%29&query=value&url=https://api.countapi.xyz/hit/sangwin.ng-modules-loading/readme)
