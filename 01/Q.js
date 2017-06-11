// 下面三段代码有区别么？区别在哪？
(function(){
    var innerName = "xiaomengmeng";
    window.resource = {
        name: innerName,
        age: 12
    };
})();

var resource = (function(){
    var innerName = "xiaomengmeng";
    return {
        name: innerName,
        age: 12
    };
})();

var resource = (function(){
    var innerName = "xiaomengmeng";
    return function() {
        return {
            name: innerName,
            age: 12
        };
    };
})();


