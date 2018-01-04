/**
 * Created by lenovo on 2018/1/4.
 */
class PersonBuilder {
  constructor(head, body, armLeft, armRight, legLeft, legRight) {
    this.head = head;
    this.body = body;
    this.armLeft = armLeft;
    this.armRight = armRight;
    this.legLeft = legLeft;
    this.legRight = legRight;
  }
  createHead() {}
  createBody() {}
  createArmLeft() {}
  createArmRight() {}
  createLegLeft() {}
  createLegRight() {}
}

// 创建一个瘦子类

class ThinPerson extends PersonBuilder {
  constructor(head, body, armLeft, armRight, legLeft, legRight) {
    super(head, body, armLeft, armRight, legLeft, legRight);
  }
  createHead() {
    console.log('小人建造开始');
    console.log('头部尺寸为', this.head);
  }
  createBody() {
    console.log('身体尺寸为', this.body);
  }
  createArmLeft() {
    console.log('左手臂尺寸为', this.armLeft);
  }
  createArmRight() {
    console.log('右手臂尺寸为', this.armRight);
  }
  createLegLeft() {
    console.log('左腿尺寸为', this.legLeft);
  }
  createLegRight() {
    console.log('右腿尺寸为', this.legRight);
    console.log('小人建造结束');
  }
}

class BuildController {
  constructor(person) {
    this.person = person;
  }

  buildPerson() {
    this.person.createHead();
    this.person.createBody();
    this.person.createArmLeft();
    this.person.createArmRight();
    this.person.createLegLeft();
    this.person.createLegRight();
  }
}
const thinPerson = new ThinPerson(20, 30, 40, 50, 60, 50);
const buildController = new BuildController(thinPerson);
buildController.buildPerson();