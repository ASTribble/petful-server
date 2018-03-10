'use strict';
const Queue = require('./queue');
const dogs = new Queue();

const dogArray = [
  {
    imageURL: 'static/pics/small_dogs/grover.jpeg',
    imageDescription: 'White and grey dog pondering her existence.',
    name: 'Grover',
    sex: 'Female',
    age: 4,
    breed: 'Short-haired mutt',
    story: 'In existential crisis.  Needs comfort.'
  },
  {
    imageURL: 'static/pics/small_dogs/larry.jpeg',
    imageDescription: 'White and black dog with a toothy grin.',
    name: 'Larry',
    sex: 'Male',
    age: 3,
    breed: 'Long-haired mutt.',
    story: 'Wants to be your new best friend.'
  },
  {
    imageURL: 'static/pics/small_dogs/sparky.jpeg',
    imageDescription: 'Excited young bulldog peeking over a deck.',
    name: 'Sparky',
    sex: 'Male',
    age: 1,
    breed: 'Bulldog',
    story: 'Inquisitive and eager to please.'
  },
  {
    imageURL: 'static/pics/small_dogs/teacup',
    imageDescription: 'A very small brown and tan dog in a polka-dot cup.',
    name: 'Teacup',
    sex: 'Male',
    age: 3,
    breed: 'Short-haired & cute',
    story: 'Would go well with crumpets!'
  },
  {
    imageURL: 'static/pics/small_dogs/grover.jpeg',
    imageDescription: 'White and grey dog pondering her existence.',
    name: 'Grover',
    sex: 'Female',
    age: 4,
    breed: 'Short-haired mutt',
    story: 'In existential crisis.  Needs comfort.'
  },
  {
    imageURL: 'static/pics/small_dogs/larry.jpeg',
    imageDescription: 'White and black dog with a toothy grin.',
    name: 'Larry',
    sex: 'Male',
    age: 3,
    breed: 'Long-haired mutt.',
    story: 'Wants to be your new best friend.'
  },
  {
    imageURL: 'static/pics/small_dogs/sparky.jpeg',
    imageDescription: 'Excited young bulldog peeking over a deck.',
    name: 'Sparky',
    sex: 'Male',
    age: 1,
    breed: 'Bulldog',
    story: 'Inquisitive and eager to please.'
  },
  {
    imageURL: 'static/pics/small_dogs/teacup',
    imageDescription: 'A very small brown and tan dog in a polka-dot cup.',
    name: 'Teacup',
    sex: 'Male',
    age: 3,
    breed: 'Short-haired & cute',
    story: 'Would go well with crumpets!'
  }
];

function seedQueue(q, array) {
  for (let i = 0; i < array.length; i++) {
    q.enqueue(array[i]);
  }
}

seedQueue(dogs, dogArray);

module.exports = dogs;
