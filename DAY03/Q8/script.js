"use strict"
var radius = 5;
//var areaOfcircle = Math.PI * radius * radius ;
//console.log(areaOfcircle);
function circle(x) {
    var area = Math.PI * x * x;
    return area;
}
var areaOfcircle = circle(radius);
console.log("Area of circle is :" + areaOfcircle);