/**
 * Created by lenovo on 2018/1/4.
 */
class GiveGift {
  constructor(mm) {
    this.mm = mm;
  }
  giveDolls() {}
  giveFlower() {}
  giveChocolate() {}
}

class Pursuit extends GiveGift {
  constructor(mm) {
    super(mm);
  }
  giveDolls() {
    console.log(this.mm.name, '送你娃娃');
  }
  giveFlower() {
    console.log(this.mm.name, '送你花花');
  }
  giveChocolate() {
    console.log(this.mm.name, '送你巧克力');
  }
}

class Proxyer extends GiveGift {
  constructor(mm) {
    super(mm);
    this.gg = new Pursuit(mm);
  }
  giveDolls() {
    this.gg.giveDolls();
  }
  giveFlower() {
    this.gg.giveFlower();
  }
  giveChocolate() {
    this.gg.giveChocolate();
  }
}

class Girl {
  constructor(name) {
    this.name = name;
  }
}

const mm = new Girl('霞霞');

const proxy = new Proxyer(mm);

proxy.giveDolls();
proxy.giveFlower();
proxy.giveChocolate();


