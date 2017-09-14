# SimpliTest

This is the test repo for Simplifia candidates. We've used the angular seed of mgechev to create this basic setup (https://github.com/mgechev/angular-seed).

# Instructions

We strongly recommend node >=v6.5.0 and npm >=3.10.3 (we'll test your code with node 7.7.4 and npm 4.1.2).
Pull the repo and run npm install.

Test command is npm run test
Start command is npm run start, app is booting on port 5555, with a live reload, so you don't need to reload it at each change.

# Test

Follow each of thoses steps and commit every 30 minutes on the repo. It doesn't matter if you didn't finish a feature because you're missing something, we have more interest on how you do things rather than the finished product here. The difficulty will increase on each test starting with very basic stuff, go as far as you can, and mark every step in the readme as DONE, PARTIALLY DONE, NOT DONE next to the test number. Some tests are tied with the previous ones, and this is intended, so read them all before you start. When you finished or time is up, create a pull request for us to review before your interview. Good luck.

## BASIC - TEST 1 DONE (weird behaviour when adding a templateUrl)

- Create a new component displaying a list containing the three strings 'Toto', 'Titi', 'Tata'. Set the color of the string 'Toto' as blue, 'Titi as green and 'Tata' as red. This component should be displayed on the home page.

## ROUTING - TEST 2

- Create a new route, and add to the menu, the route is named ApiRoad. A click on the link in the menu should display a new route with a component containing the string "Testing ApiRoad"

## HTTP - TEST 3

- Take the previously created component for the ApiRoad page, and just after the string "Testing ApiRoad", display a Material Design Button it must be a raised button.
On click, display table containing the list of the names returned by this : http://pokeapi.co/api/v2/pokemon

Bonus points : display a loader while the request is loading instead of the button, then display the button again once the request is complete. This is not mandatory for this test.

hint: https://material.angular.io/components, you already have Material installed on the repo, so you don't need to worry about it.

## UNIT TESTS - TEST 4

- Create unit tests of the previous step. Go as far as you deem necessary. The goal here is to test what's needs to be tested, nothing more, nothing less.

## RESOLVING - TEST 5

- Create a second route, named 'resolving', that display the exact same list from http://pokeapi.co/api/v2/pokemon BUT instead of clicking on a button to display it, it must resolve the call BEFORE the route resolve. When the route resolve, the data is instantly displayed.

## NGRX STORE - TEST 6

- This is the hardest test. Start it only if you have completed the previous ones. You have a basic NGRX store in the application. Based on what you did on the TEST 3, add the data received when clicking on the button to the store. On the first page right after the list of TEST 1, display the data of the Api as a material list, BUT ONLY TAKE THE DATA FROM THE STORE. Do not call it from the Api.

You can refactor the store/components as you see fit (e.g create a correct folder tree...). Our goal here is to see how you would do it.

hint 0 : http://redux.js.org/ (this is about the pattern)

hint 1 : https://github.com/ngrx/store

hint 2 : Installing the redux dev tools chrome extension could help to see the store content.

And you're done at this point. Don't forget to make a PR :)
