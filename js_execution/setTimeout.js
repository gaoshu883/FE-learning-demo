// setTimeout第一个例子
// 隐藏知识点：timer的作用域
for (var i = 1; i <= 3; i++) {
  setTimeout( function timer() {
    console.log(i);
  },0);
}

// 能够打印出1,2,3的一种方式
for (var i = 1; i <= 3; i++) {
  (function(a){
    setTimeout( function () {
      console.log(a);
    });
  })(i);
}

// 下面的两种变形和参数a有关
// 另外对比一种情况
// 输出：undefined (3 times)
for (var i = 1; i <= 3; i++) {
  (function(a){
    setTimeout( function (a) {
      console.log(a);
    });
  })(i);
}
// 还有一种情况
// 抛出：a is not defined
for (var i = 1; i <= 3; i++) {
  (function(){
    setTimeout( function () {
      console.log(a);
    });
  })(i);
}

// setTimeout第二个例子
// 运行时间为: 1000 ms
var start = new Date;
setTimeout(function(){
var end = new Date;
console.log('运行时间为:', end - start, 'ms');
}, 500);
while (new Date - start < 1000) {};

