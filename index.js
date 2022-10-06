async function getDatos() {
  const API_URL = 'https://icanhazdadjoke.com/';
  const HTMLResponse = document.getElementById('jokeText');

  fetch(API_URL, {
    method: 'GET',
    headers: { 'Accept': 'application/json'
    }})
    .then(response => response.json())
    .then(json => { HTMLResponse.innerText = `"${json.joke}"`; })
}






