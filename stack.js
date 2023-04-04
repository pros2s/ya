class MaxStack {
  constructor() {
    this.stack = [];
    this.size = 0;
    this.maximum = null;
  }

  push(value) {
    if (!this.maximum || value > this.maximum) {
      this.maximum = value;
    }

    this.stack[this.size] = value;
    this.size++;
  }

  pop() {
    if (this.size === 0) return new Error('Stack is empty');

    const elem = this.stack[this.size - 1];

    delete this.stack[this.size - 1];
    this.stack.length--;
    this.size--;

    if (elem === this.maximum) {
      this.maximum = 0;
      this.stack.forEach((el) => {
        if (el > this.maximum) this.maximum = el;
      });
    }

    return elem;
  }

  max() {
    if (this.size === 0) return new Error('Stack is empty');

    return this.maximum;
  }
}

const stack = new MaxStack();
stack.push(2);
// max = 2, stack = [2]
console.log(stack.max(), stack.stack);
stack.push(1);
// max = 2, stack = [2, 1]
console.log(stack.max(), stack.stack);
stack.push(3);
// max = 3, stack = [2, 1, 3]
console.log(stack.max(), stack.stack);
stack.push(3);
// max = 3, stack = [2, 1, 3, 3]
console.log(stack.max(), stack.stack);
stack.pop(); // 3
// max = 3, stack = [2, 1, 3]
console.log(stack.max(), stack.stack);
stack.pop(); // 3
// max = 2, stack = [2, 1]
console.log(stack.max(), stack.stack);
stack.pop(); // 3
// max = 2, stack = [2, 1]
console.log(stack.max(), stack.stack);
stack.pop(); // 3
// max = 2, stack = [2, 1]
console.log(stack.stack);
