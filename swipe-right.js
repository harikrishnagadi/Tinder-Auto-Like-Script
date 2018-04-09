var swipeButton = document.querySelector('.recsGamepad__button--like');
var likeCount = 0;

function swipeRight() {
  likeCount++;
  console.log('Swiped!' + likeCount);
  //interval to start the script every 45 min. Can adjust the milliseconds.
  setInterval(swipeRight, 2700000)
  //Can adjust the line below to increase/decrease the swiping speed
  var timeBetweenSwipe = Math.random() * (4000 - 4000) + 2000; 
  swipeButton.click();
  if (likeCount < 80) {
    setTimeout(swipeRight, timeBetweenSwipe);
  } else {
    console.log('take 5')
  }
}

swipeRight();