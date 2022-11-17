const numberOfStars = 500,
  twinkleFrequencyMinimum = 2, // seconds
  twinkleFrequencyMaximum = 6; // ''

const constructUniverse = () => {
  
  const mainWidth = document.getElementsByTagName("main")[0].scrollWidth;
  const mainHeight = document.getElementsByTagName("main")[0].scrollHeight;

  for (i = 0; i < numberOfStars; i++) {
    
    const xAxis = Math.floor(Math.random() * mainWidth);
    const yAxis = Math.floor(Math.random() * mainHeight);

    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = yAxis.toString() + "px";
    star.style.left = xAxis.toString() + "px";
    document.getElementsByTagName("main")[0].appendChild(star);
    
  }

  const randomRange = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  let stars = document.getElementsByClassName("star");

  for (i = 0; i < stars.length; i++) {
    let randNum = randomRange(twinkleFrequencyMinimum, twinkleFrequencyMaximum); // twinkle duration
    stars[i].style.animationDuration = randNum + "s";
  }

  // todo: finish this..

  // random 'big' twinkle
  /* const bigTwinkle = document.createElement('div');
  bigTwinkle.classList.add('bigtwinkle');
  const bigTwinkleStar = document.getElementsByClassName("star")[numberOfStars - 1];
  const starParent = bigTwinkleStar.parentNode;
  
  starParent.insertBefore(bigTwinkle, bigTwinkleStar);
  bigTwinkle.style.top = bigTwinkle.nextSibling.style.top; */
  
};

const outputStars = () => {
  let starCollection = document.getElementsByClassName("star");
  if (starCollection.length === 0) {
    constructUniverse();
  } else {
    const removeStars = (starCollection) => {
      starCollection.forEach((el) => el.remove());
    };
    removeStars(document.querySelectorAll(".star"));
    constructUniverse();
  }
};

let timerIsActive = false;

window.addEventListener("resize", () => {
  if (!timerIsActive) {
    timerIsActive = true;
    var timer = setTimeout(() => {
      outputStars();
      timerIsActive = false;
    }, 500);
  }
});

outputStars();
