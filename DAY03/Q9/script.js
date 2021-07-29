"use strict"
var radius = 5;

function circle(x) {
    var area = Math.PI * x * x;
    return area;
}
var areaOfcircle = circle(radius).toFixed(2);
console.log("Area of circle is :" + areaOfcircle);