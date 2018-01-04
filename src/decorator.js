/**
 * Created by lenovo on 2018/1/4.
 */
class Clothing {
  constructor(cloth) {
    this.cloth = cloth;
  }
  dress() {
    if (this.cloth) {
      this.cloth.dress();
    }
  }
}

class Kuzi extends Clothing {
  constructor(cloth) {
    super(cloth);
  }
  dress() {
    this.cloth.dress();
    console.log('穿裤子');
  }
}

class Yifu extends Clothing {
  constructor(cloth) {
    super(cloth);
  }
  dress(cloth) {
    this.cloth.dress();
    console.log('穿衣服');
  }
}

class Xiezi extends Clothing {
  constructor(cloth) {
    super(cloth);
  }
  dress(cloth) {
    this.cloth.dress();
    console.log('穿鞋子');
  }
}

class Person {
  constructor() {
    // this.clothing = clothing;
  }

  dress(cloth) {
    // this.clothing.dress(cloth);
  }
}

let xiaoming = new Person();

let ckz = new Kuzi(xiaoming);
let cyf = new Yifu(ckz);
let cxz = new Xiezi(cyf)
cxz.dress();