/**
 * Created by lenovo on 2018/1/4.
 */
class Subject {
  constructor() {
    this.observers = []
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    let index = this.observers.indexOf(observer);

    index !== -1 && this.observers.splice(index, 1);
  }

  notify() {
    this.observers.forEach(e => {
      e.update()});
  }
}

class ConcreteSubject extends Subject {
  constructor() {
    super();
    this.subjectState = '';
  }

  set(value) {
    this.subjectState = value;
    this.notify();
  }
  get() {
    return this.subjectState;
  }
}


class Observer {
  update() {}
}

class ConcreteObserver extends Observer {
  constructor(subject, name) {
    super();
    this.name = name;
    this.subject = subject;
    this.observerState = '';
  }
  update() {
    this.observerState = this.subject.subjectState;
    console.log(`观察者${this.name}的新状态是${this.observerState}`);
  }
}


const s = new ConcreteSubject();
const o1 = new ConcreteObserver(s, 'X');
const o2 = new ConcreteObserver(s, 'Y');
const o3 = new ConcreteObserver(s, 'Z');
s.attach(o1);
s.attach(o2);
s.attach(o3);

s.set('ABC')
