/*
用回调函数实现异步执行
*/

// function callback() {
//     console.log('Done');
// }

// console.log('before seTimeout()');
// // 1s 后调用 callback 函数
// setTimeout(callback, 1000);
// console.log('after setTimeout()');


/*
Promise: 
*/

// 判断是否支持 Promise
// new Promise(function() {
//     console.log('支持Promise!')
// });


// Promise
function test(resolve, reject) {
    let timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');

    setTimeout(function() {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        } else {
            console.log('call reject()...');
            reject('timeout in' + timeOut + ' secondes');
        }
    }, timeOut * 1000);
}

// let p1 = new Promise(test);
// let p2 = p1.then(function(result) {
//     console.log('成功: ' + result);
// });
// let p3 = p2.catch(function(reason) {
//     console.log('失败: ' + reason);
// });

// new Promise(test).then(function(result) {
//     console.log('成功: ' + result);
// }).catch(function(reason) {
//     console.log('失败: ' + reason);
// });


// 新建 Promisse
new Promise(function(resolve, reject) {
    console.log('start new Promise...');
    let timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');

    setTimeout(function() {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        } else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' secondes');
        }
    }, timeOut * 1000);
}).then(function(r) {
    console.log('Done: ' + r);
}).catch(function(reason) {
    console.log('Failed: ' + reason);
});

// Promise 串行任务