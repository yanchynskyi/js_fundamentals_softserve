var arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = (function (n) {
    return function () {
      console.log(n);
    };
  })(i); //!!
}

arr[0](); // 0
arr[arr.length - 1](); // 2
