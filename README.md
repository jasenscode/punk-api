# Brewdog Punk API

This is a site to allows users to browse the range of Brewdog beverages, and allow them to apply various search filters.

The timeframe allowed to complete this project was one week.

[Check out the live demo here!](https://jasenscode.github.io/punk-api/)

![PunkAPI screenshot](https://github.com/jasenscode/punk-api/blob/main/src/assets/images/punk-api-screenshot.JPG?raw=true)
____________
### Technologies

- HTML5
- Sass
- React
_____
### About

The aim of this project was to build a website using React and an API while utilising all the skills we had learnt on the course so far. This project took place on week 7 of the nology course. This was the toughest project on the course so far for me as I hadn't used React prior to the course at all and we had only been learning it for a week at this point.

Within our brief, we were provided with a component tree and a basic reference design spec from which to work off, together with a data file containing a sample of information that would be pulled from the API.

![Component Tree screenshot](add component tree screenshot here)

Initially I used to data file as opposed to the API to get functionality to map over the data in order to display the cards on the site working. Once this had been done, I implemented use of the API, for which I first used Postman to check the required endpoints were working successfully.

The brief outlined that once the basic site had been created and the beverage cards were able to be rendered on the screen then we should add some filters, the first one being a text search with the page updating as each letter is typed in the search box. 

After this was done, further filters were implemented, namely to only render beverages that were brewed before a certain year and those with higher alcohol content. In order to do this, I reviewed the API documentation and found there were different endpoints I could use within the fetch function. This meant that the URL could be altered slightly whenever the relevant filter checkbox was checked.

_____
### Future fixes

- Implement functionality for more filters
- Make the ABV and acidity filters a range as opposed to tick box for one value
