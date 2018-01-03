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
  opration() {
    return null;
  }
}

class PlusFactory extends Factory {
  constructor(a, b) {
    super(a, b);
  }
  opration() {
    return new Plus(this.a, this.b);
  }
}

class ReduceFactory extends Factory {
  constructor(a, b) {
    super(a, b);
  }
  opration() {
    return new Reduce(this.a, this.b);
  }
}

class MultiFactory extends Factory {
  constructor(a, b) {
    super(a, b);
  }
  opration() {
    return new Multi(this.a, this.b);
  }
}

class DivFactory extends Factory {
  constructor(a, b) {
    super(a, b);
  }
  opration() {
    return new Div(this.a, this.b);
  }
}


let reduceFactory = new ReduceFactory(9, 6).opration();

console.log(reduceFactory.getResult())
