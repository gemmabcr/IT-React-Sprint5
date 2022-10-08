let joke;
const reportJokes = []
const JokeHTMLResponse = document.getElementById('jokeText');

function chooseApi(){
  let random = Math.round(Math.random() * 10);
  if (random % 2 === 0) getDatos();
  else getDatos2();
}

async function getDatos() {
  const JOKE_API_URL = 'https://icanhazdadjoke.com/';

  fetch(JOKE_API_URL, {
    method: 'GET',
    headers: { 'Accept': 'application/json'
    }})
    .then(response => response.json())
    .then(json => {
      JokeHTMLResponse.innerText = `"${json.joke}"`;
      document.getElementById('scoreReviewContainer').style.visibility = 'visible';
      joke = json.joke;
    })
}

async function getDatos2() {
  const JOKE2_API_URL = 'https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=religious,racist,sexist&type=single';

  fetch(JOKE2_API_URL, { method: 'GET' })
    .then(response => response.json())
    .then(json => {
      JokeHTMLResponse.innerText = `"${json.joke}"`;
      document.getElementById('scoreReviewContainer').style.visibility = 'visible';
      joke = json.joke;
    })
}

document.getElementById("goodReview").onclick = function() {getScoreReview(3)};
document.getElementById("neutralReview").onclick = function() {getScoreReview(2)};
document.getElementById("badReview").onclick = function() {getScoreReview(1)};

function getScoreReview(review){
  document.getElementById('scoreReviewContainer').style.visibility = 'hidden';
  postReview(joke, review);
}

function postReview(joke,score){
  reportJokes.push(new Review(joke,score));
  console.log(reportJokes);
}





