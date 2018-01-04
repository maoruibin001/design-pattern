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
    if (this.mm.age >= 18) {
      this.gg.giveDolls();
    } else {
      console.log(this.mm.name, '还是未成年，不接受娃娃');
    }

  }
  giveFlower() {
    if (this.mm.age >= 18) {
      this.gg.giveFlower();
    } else {
      console.log(this.mm.name, '还是未成年，不接受花花');
    }
  }
  giveChocolate() {
    if (this.mm.age >= 18) {
      this.gg.giveChocolate();
    } else {
      console.log(this.mm.name, '还是未成年，不接受巧克力');
    }
  }
}

class Girl {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const mm = new Girl('霞霞', 18);

const proxy = new Proxyer(mm);

proxy.giveDolls();
proxy.giveFlower();
proxy.giveChocolate();


