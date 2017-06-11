// JS模块化：匿名函数和立即执行函数
// 本质：本身是一个匿名函数 但是立即执行啦
// 作用： 模仿一个私有作用域 防止污染全局作用域
// 又称：命名空间
(function() {
    // 局部作用域
    // 1. JS解析器预解析：变量和函数的提升等
    //                   resourceCache
    //                   loading
    //                   readyCallbacks
    //                   load
    //                   _load
    //                   get
    //                   isReady
    //                   onReady
    //   全局变量    window.Resources

    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

    function load(urlOrArr) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                _load(url);
            });
        } else {
            _load(urlOrArr);
        }
    }

    function _load(url) {
        if (resourceCache[url]) {
            return resourceCache[url];
        } else {
            var img = new Image();
            img.onload = function() {
                resourceCache[url] = img;
                if (isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };
            resourceCache[url] = false;
            img.src = url;
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function isReady() {
        var ready = true;
        for (var k in resourceCache) {
            if (resourceCache.hasOwnProperty(k) &&
                !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {
        readyCallbacks.push(func);
    }
    // 向外暴露的接口
    window.Resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();
