var first = document.getElementById('input1');
var second = document.getElementById('input2');
var result = document.getElementById('result');
//实例化一个Worker
var worker = new Worker('./js/worker.js');

// 监听文本输入框1和文本输入框2
// 一旦其中的内容发生改变
// 则向worker发送数据消息
      // 发送的是两个文本输入框的值（已数组的形式发送）
      // 这里是异步操作，因为要等着worker把处理后的数据返回来
first.onchange = function () {
  worker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
};
second.onchange = function() {
  worker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
};
// 监听worker上是否返回了数据
// 一旦有数据从worker中返回，则调用函数（事件处理程序）
worker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
}
