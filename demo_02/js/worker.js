// worker主要的工作任务是：
//       时刻监听是否有来自主线程的信息
//       嗯哼，一旦监听到了信息，就触发了事件处理程序
//       事件处理程序中的步骤：
                  // 把主线程上传过来的两个数据相乘
                  // 然后再把结果发送回主线程
onmessage = function(e){
    console.log('Message received from main script');
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    console.log('Posting message back to main script');
    postMessage(workerResult);
};

