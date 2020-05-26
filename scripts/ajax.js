function success(text) {
    let textarea = document.getElementById('');
    textarea.value = text;
}

function fail(code) {
    let textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}


const request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == 4) {
        if (request.status === 200) {
            return success(request.responseText);
        } else {
            return fail(request.status);
        }
    } else {
        console.log('HTTP 请求还在继续');
    }
};

// 发送请求
request.open('GET', '/api/categories');
request.send();

alert('请求已发送，请等待响应...');


// Promise 实现 AJAX 请求

function ajax(method, url, data) {
    let request = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            } else {
                console.log('HTTP 请求还在继续');
            }
        };
        request.open(method, url);
        request.send(data);
    });
}

var p = ajax('GET', '/api/categories');
p.then(function(text) { // 如果AJAX成功，获得响应内容
    console.log.innerText = text;
}).catch(function(status) { // 如果AJAX失败，获得响应代码
    console.log.innerText = 'ERROR: ' + status;
});