/**
 * Created by lenovo on 2018/1/4.
 */
class Publish {
  constructor() {
    this.subList = [];
  }
  attach(sub) {}
  detach(sub) {}
  notify() {}
}
//真实观察者
class RealPublish extends Publish {
  constructor() {
    super();
    this.pubState = '';
  }
  attach(sub) {
    this.subList.push(sub);
  }
  detach(sub) {
    let index = this.subList.indexOf(sub);
    index !== -1 && this.subList.splice(index, 1);
  }
  notify() {
    this.subList.forEach(e => e.update());
  }

  setState(state) {
    this.pubState = state;
    this.notify();
  }

  getState() {
    return this.pubState();
  }
}

//抽象订阅者
class Subscribe {
  update(){}
}

class RealSubscribe {
  constructor(pub, name) {
    this.pub = pub;
    this.name = name;
  }

  update() {
    console.log(`订阅者${this.name}的状态更新为${this.pub.pubState}`);
  }
}

const pub = new RealPublish();

const sub1 = new RealSubscribe(pub, '毛');
const sub2= new RealSubscribe(pub, '瑞');
const sub3 = new RealSubscribe(pub, '彬');

pub.attach(sub1);
pub.attach(sub2);
pub.attach(sub3);

pub.setState('ttt')
pub.detach(sub2);

pub.setState('哈哈')