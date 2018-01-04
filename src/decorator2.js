/**
 * Created by lenovo on 2018/1/4.
 */
class Clothing {
  // constructor(cloth) {
  //   this.cloth = cloth;
  // }
  dress() {
    if (this.cloth) {
      this.cloth.dress();
    }
  }
  decorate(cloth) {
    this.cloth = cloth;
  }
}

class Kuzi extends Clothing {
  // constructor(cloth) {
  //   super(cloth);
  // }
  dress() {
    if (this.cloth) {
      this.cloth.dress();
    }

    console.log('穿裤子');
  }
  decorate(cloth) {
    this.cloth = cloth;
  }
}

class Yifu extends Clothing {
  // constructor(cloth) {
  //   super(cloth);
  // }
  dress(cloth) {
    this.cloth.dress();
    console.log('穿衣服');
  }
  decorate(cloth) {
    this.cloth = cloth;
  }
}

class Xiezi extends Clothing {
  // constructor(cloth) {
  //   super(cloth);
  // }
  dress(cloth) {
    this.cloth.dress();
    console.log('穿鞋子');
  }
  decorate(cloth) {
    this.cloth = cloth;
  }
}

class Person {
  constructor() {
    // this.clothing = clothing;
  }

  dress(cloth) {
    // this.clothing.dress(cloth);
    if (this.cloth) {
      this.cloth.dress();
    }
  }

  decorate(cloth) {
    this.cloth = cloth;
  }
}

let xiaoming = new Person();

let ckz = new Kuzi();
let cyf = new Yifu();
let cxz = new Xiezi();

xiaoming.decorate(ckz);

cyf.decorate(xiaoming);

cxz.decorate(cyf);

cxz.dress();