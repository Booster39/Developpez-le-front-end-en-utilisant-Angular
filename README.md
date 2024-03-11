# OlympicGamesStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Installation

First, clone the project folder using an IDE : `git clone https://github.com/Booster39/Developpez-le-front-end-en-utilisant-Angular.git`.

Enter the created folder: `cd Developpez-le-front-end-en-utilisant-Angular`.

Then install your node_modules before starting, it will install the the Angular CLI and other useful tools : `npm install`.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Architecture

As you can see, the architecture includes (in addition to the default angular architecture) the following:

- `components` folder: contains every reusable components, which contains (`detail`, `home` and `not-found` folders):
    - `AppComponent` : the app root component that displays all the application
    - `home` :
        - `HomeComponent` : the medals per Country for all the Olympic Game. It is represented by an interactive pie Chart page.
    - `detail`:
        - `DetailComponent` : the medals earned per Game for the selected country and its athletes's number. It is represented by a lign Chart page.
    - `not-found` :
        - `NotFoundComponent` : the error page. 
- `core` folder: contains the business logic (`services` and `models` folders):
    - `services` : contains relevant methods for the Olympic application (`olympic.service.ts`)
    - `models` : `Olympic`(contains `HomeComponent` data) and `Participation`(contains `DetailComponent data`)

 `app-routing.module.ts` : defines the routes of each page.
 `app.module.ts` : creates the app module executed by the `main`.


You're now ready to enter the application.

Good luck!
