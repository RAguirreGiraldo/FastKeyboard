'use strict';

export default class Score {
    constructor(_date, _hits, _person){ //Propierty of my constructor
        this.date = _date;
        this.hits = _hits;
        this.person =_person;
    }
    get #getDate(){  //getters of my class
        return this.date;
    }
    get #getHits(){
        return this.hits;
    }
    get #getPerson(){
        return this.person;
    }
    getStats(){  //Method of my class Action of my class
        return this.#getDate;
    }
}

