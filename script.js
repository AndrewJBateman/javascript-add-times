const timeNodes = Array.from(document.querySelectorAll(`[data-time]`));

// turn into an array of strings then split into mins secs
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

console.log(`Total Youtube video time is ${hours} hours,`, `${mins} minutes and`, `${secondsLeft} seconds`);
