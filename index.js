let joke;
const reportJokes = []

async function getDatos() {
  const API_URL = 'https://icanhazdadjoke.com/';
  const HTMLResponse = document.getElementById('jokeText');

  fetch(API_URL, {
    method: 'GET',
    headers: { 'Accept': 'application/json'
    }})
    .then(response => response.json())
    .then(json => {
      HTMLResponse.innerText = `"${json.joke}"`;
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





