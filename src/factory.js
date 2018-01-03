/**
 * Created by lenovo on 2018/1/3.
 * 工厂模式
 */
function all2num(value) {
  let type = typeof value;
  switch (type) {
    case 'number':
      return value;
    case 'string':
      let ret = parseFloat(value);
      return isNaN(ret) ? 0 : ret;
    case 'boolean':
      return Number(value);
    default:
      return 0;
  }
}
class Oparation {
  constructor(a, b) {
    this.a = all2num(a);
    this.b = all2num(b);
  }
  getResult() {
    return 0;
  }
}


class Plus extends Oparation{
  constructor(a, b) {
    super(a, b);
  }
  getResult() {
    return this.a + this.b;
  }
}

class Reduce extends Oparation{
  constructor(a, b) {
    super(a, b);
  }
  getResult() {
    return this.a - this.b;
  }
}

class Multi extends Oparation{
  constructor(a, b) {
    super(a, b);
  }
  getResult() {
    return this.a * this.b;
  }
}

class Div extends Oparation{
  constructor(a, b) {
    super(a, b);
  }
  getResult() {
    return this.a / this.b;
  }
}

class Factory {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class PlusFactory extends Factory {
  constructor(a, b) {
    super(a, b);
    return new Plus(a, b);
  }
}

class ReduceFactory extends Factory {
  constructor(a, b) {
    super(a, b);
    return new Reduce(a, b);
  }
}

class MultiFactory extends Factory {
  constructor(a, b) {
    super(a, b);
    return new Multi(a, b);
  }
}

class DivFactory extends Factory {
  constructor(a, b) {
    super(a, b);
    return new Div(a, b);
  }
}


let reduceFactory = new ReduceFactory(9, 6);

console.log(reduceFactory.getResult())
