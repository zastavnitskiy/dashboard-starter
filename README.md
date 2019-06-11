# Dashboard demo [![Build Status](https://travis-ci.org/zastavnitskiy/state-as-querystring.svg?branch=master)](https://travis-ci.org/zastavnitskiy/dashboard-starter)

# Running locally

Install dependencies:
`$ yarn`

Run:
`$ yarn start`

# Running via docker

`$ docker build . -t dashboard`

`$ docker run -p 8080:8080 dashboard`

# Application structure

Main entry point is `src/index.js`

Routing is in `src/App.js`

Individual pages and their components and hooks should be placed in `src/pages`,
shared components, hooks and utilities are in `src/<components/hooks/utils>` directories respectively.
