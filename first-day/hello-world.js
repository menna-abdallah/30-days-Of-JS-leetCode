// 2667. Create Hello World Function
// This question is intended as an introduction to JavaScript functions.

var createHelloWorld = function () {
    return () => "Hello World"
};

const f = createHelloWorld();
f();
