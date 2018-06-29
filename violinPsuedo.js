'use strict'
var  EventEmitter = require('events');
 class Violin extends EventEmitter{
 
    constructor(){
        super();
        this.message = 'violin is playing';

    }
   

 }
 var violin = new Violin();
 violin.on('note', () => {
    console.log(this.message);
  });
  setInterval(function() {
    violin.emit('note');
  }, 1000); 