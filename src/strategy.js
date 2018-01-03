/**
 * Created by lenovo on 2018/1/3.
 */
class Play {
  playWay() {
    throw new Error('parent play');
  }
}

class PlayByBike extends Play {
  playWay() {
    console.log('骑自行车玩')
  }
}

class PlayByFootball extends Play{
  playWay() {
    console.log('玩足球');
  }
}

class PlayByBasketball extends Play{
  playWay() {
    console.log('玩篮球');
  }
}

// 单列模式和策略模式结合使用
class PlayController{
  constructor(playWay) {
    // this.play = play;
    switch (playWay) {
      case '篮球':
        this.play =  new PlayByBasketball();
        break;
      case '足球':
        this.play = new PlayByFootball();
        break;
      default:
        this.play = new PlayByBike();
    }
  }

  toPlay() {
    this.play.playWay();
  }
}


let payBas = new PlayController('');

payBas.toPlay();