class Review {
  constructor(joke, score) {
    this._joke = joke;
    this._score = score;
    this._date = this.setDate();
  }

  getJoke(){
    return this._joke;
  }

  getScore(){
    return this._score;
  }

  getDate(){
    return this._date;
  }

  setJoke(joke){
    this._joke = joke;
  }

  setScore(score){
    this._score = score
  }

  setDate(){
    return (new Date()).toISOString();
  }
}