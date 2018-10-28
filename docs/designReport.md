# Design Report

## Basic design
The project was from the inception conceived as a web application and interface.
The project is written in node.js and uses the `express` library for the backend.
The architecture is very simple, the game logic is accessed through an `express` based API and served up as web page.

## Test driven design

The project was developed with test driven development as a guiding principle. This means unit tests were written for any and all functions at the same time as the functions themselves.

## Coding standard

This project uses the **JavaScript Standard Style**. This was done to enforce a consistent coding style, variable naming, indentation and spacing. This was also done to catch more bugs earlier as the standard forbids unused variables and prevents various other bug-inducing coding-habits. [**See More**](https://standardjs.com/rules.html#javascript-standard-style)

## Continuous Integration

The project uses CircleCI to run all the tests as soon as any changes are pushed to github.

## Code inspections

The decision was taken to use pair-programming during development. This was done to try and focus the teams resources effectively and to prevent typos, bugs and other such mistakes early on. [**See More**](https://collaboration.csc.ncsu.edu/laurie/Papers/XPSardinia.PDF) It was also decided to require all pull requests to be reviewed by two people before merging. This was to increase oversight and also to require someone from outside the pair to look over the code.
