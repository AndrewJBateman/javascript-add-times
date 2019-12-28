# Javascript Local Storage

Wes Bos Youtube Javascript30 tutorial: [How JavaScript's Array Reduce Works - #JavaScript30 18/30](https://www.youtube.com/watch?v=SadWPo2KZWg&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=18).


*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Tutorial Code to understand how to sum time strings using the reduce function.

## Screenshots

![Example screenshot](./img/vids.png).

## Technologies

* [Javascript v1.9 ECMA-262 ECMAScript 2018](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## Setup

* Open index.html in browser. If any code is changed the browser needs to be refreshed.

## Code Examples

* Use map, split and reduce functions to obtain total seconds then convert to hours, moins and seconds.

```javascript
// turn secs:mins nodes into an array of strings then split into mins secs
// then use parsefloat function to return an array of numbers.
// then convert to a total seconds value
// then use reduce function to produce a total in seconds.
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds)

  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600; // leftover from minutes is seconds
  
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
```

## Features

*  Gives total video play time in hours, mins & secs.

## Status & To-Do List

* Status: Working.

* To-Do: This code can be enhanced with html to show the time values from the javascript calculations.

## Inspiration

* Wes Bos Youtube Javascript30 tutorial [How JavaScript's Array Reduce Works - #JavaScript30 18/30](https://www.youtube.com/watch?v=SadWPo2KZWg&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=18)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
