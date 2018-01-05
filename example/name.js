/**
 * Created by lenovo on 2018/1/5.
 */



function kk(fn) {
  fn(function() {
    console.log(444)
    console.log(fn.name);
  })
}

var tt = function(cb) {
  cb()
}
kk(tt)