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


// Create a class named Score with 3 private properties (date, hits, percentage), 
// 3 getters and a constructor). Score objects are created when the game ends


// crear una clase que se llame score (check) linea3
// con 3 propiedades privadas
