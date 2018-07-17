var obj,
Assignment2 = {

  setting: {
    array1 : [2,3,9],
    array2 : [5,4,6],
    number : 1243543,
    n : 15,
    marks : [45,54,67,87],
    addition : '+',
    substraction : '-',
    multiply : '*',
    divide : '/',
  },
  init: function() {
    obj = this.setting;
  },
  percentageCalculate: function() {
    var result = 0
     var length = arguments.length;
     for (var i = 0; i < length; i++) {
        result += arguments[i];
     }
     return result/length;
  },

  simpleCalculator: function (operator,number1,number2) {
    function plus(number1,number2) {
      return (number1 + number2);
    }
    function minus(number1,number2) {
      return (number1 - number2);
    }
    function multiply(number1,number2) {
      return (number1 * number2);
    }
    function divide(number1,number2) {
      return (number1 / number2);
    }
    var c = 0;
    switch(operator.toString()) {
      case '+':
        c = plus(number1,number2)
        break;
      case '-':
        c = minus(number1,number2)
        break;
      case '*':
        c = multiply(number1,number2)
        break;
      case '/':
        c = divide(number1,number2)
        break;
      default:
        c = "Don't really know...";
    }
    return c
  },

  multiplicationTable: function(number) {
    var n = 1;
    while(n <= 10){
      console.log(number*n);
      n += 1;
    }
  },

  countDigit: function(number) {
    return number.toString().length;
   },

  avarage: function (arr) {
    var sum = arr.reduce((a, b) => a + b, 0);
    return sum/arr.length;
  },

  lageNumber: function (arr) {
    return Math.max(...arr);
  },

  addTwoArray: function (arr1,arr2) {
    var sum = arr1.map(function (num, idx) {
      return num + arr2[idx];
    });
    return sum
  },

  reverseArray: function (arr) {
    return arr.reverse()
  }

};

Assignment2.init()