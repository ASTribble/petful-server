'use strict';
const Queue = require('./queue');

const cats = new Queue();

const catArray = [
  {
    imageURL: 'static/pics/small_cats/alice.jpeg',
    imageDescription: 'Kitten with grey head and white face and chin.',
    name: 'Alice',
    sex: 'Female',
    age: .5,
    breed: 'Calico',
    story: 'Likes scary movies.  Got lost in the couch.'
  },
  {
    imageURL: 'static/pics/small_cats/harry.jpeg',
    imageDescription: 'Small grey smoosh-faced cat.',
    name: 'Harry',
    sex: 'Male',
    age: 1,
    breed: 'Blue',
    story: 'Ran into a wall and got disoriented.'
  },
  {
    imageURL: 'static/pics/small_cats/smokey.jpeg',
    imageDescription: 'Wide-eyed grey and white cat gazing into the camera.',
    name: 'Smokey',
    sex: 'Female',
    age: 1,
    breed: 'Short-hair',
    story: 'Only wants to be adored.'
  },
  {
    imageURL: 'static/pics/small_cats/stretch.jpeg',
    imageDescription: 'Adorable cat stretching-out',
    name: 'Stretch',
    sex: 'Male',
    age: 2,
    breed: 'Short-hair',
    story: 'Wants belly rubs and a forever home.'
  },
  {
    imageURL: 'static/pics/small_cats/alice.jpeg',
    imageDescription: 'Kitten with grey head and white face and chin.',
    name: 'Alice',
    sex: 'Female',
    age: .5,
    breed: 'Calico',
    story: 'Likes scary movies.  Got lost in the couch.'
  },
  {
    imageURL: 'static/pics/small_cats/harry.jpeg',
    imageDescription: 'Small grey smoosh-faced cat.',
    name: 'Harry',
    sex: 'Male',
    age: 1,
    breed: 'Blue',
    story: 'Ran into a wall and got disoriented.'
  },
  {
    imageURL: 'static/pics/small_cats/smokey.jpeg',
    imageDescription: 'Wide-eyed grey and white cat gazing into the camera.',
    name: 'Smokey',
    sex: 'Female',
    age: 1,
    breed: 'Short-hair',
    story: 'Only wants to be adored.'
  },
  {
    imageURL: 'static/pics/small_cats/stretch.jpeg',
    imageDescription: 'Adorable cat stretching-out',
    name: 'Stretch',
    sex: 'Male',
    age: 2,
    breed: 'Short-hair',
    story: 'Wants belly rubs and a forever home.'
  }
];

function seedQueue(q, array){
  for(let i = 0; i < array.length; i++){
    q.enqueue(array[i]);
  }
}

seedQueue(cats, catArray);
console.log(cats.peek());
module.exports = cats;
  // {
  //   imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  //   imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  //   name: 'Fluffy',
  //   sex: 'Female',
  //   age: 2,
  //   breed: 'Bengal',
  //   story: 'Thrown on the street'
  // },