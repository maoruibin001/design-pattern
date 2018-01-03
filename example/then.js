/**
 * Created by lenovo on 2018/1/3.
 */
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(300);
    }, 300)
  })
}


getUser()
  .then(function(data) {
  console.log(data);
  return 3333;
})
.then((data2) => {
  console.log(data2);
  return 'tkkks'
})
.then(data3 => {
  console.log(data3);
})