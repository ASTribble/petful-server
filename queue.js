'use strict';

class _Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
      node.prev = this.last;
    }

    this.last = node;
    return;
  }

  dequeue() {
    if (this.first === null) {
      return null;
    }

    const nodeToDequeue = this.first;
    this.first = this.first.next;

    if (nodeToDequeue === this.last) {
      this.last = null;
    }

    return nodeToDequeue.data;
  }


  peek() {
    if (!this.first) {
      return null;
    }
    return this.first.data;
  }

  display() {
    if (!this.first) {
      console.log('no q');
      return null;
    }
    let currNode = this.first;
    console.log('-----------start');
    while (currNode !== null) {
      console.log(currNode.data);
      currNode = currNode.next;
    }
    console.log('------------end');
    return;
  }

}


module.exports = Queue;