/**
 * Created by lenovo on 2018/1/3.
 * 简单工厂模式
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
  constructor(a, b, symbol) {
    switch (symbol) {
      case '-':
        return new Reduce(a, b);
      case '*':
        return new Multi(a, b);
      case '/':
        return new Div(a, b);
      default:
        return new Plus(a, b);
    }
  }
}


let add = new Factory(function() {}, 6, '-');

console.log(add.getResult())
