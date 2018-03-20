// Team acDC
// Carol Pan and Donia Tung
// SoftDev2 pd7
// K13 - Scattered
// 2018-03-21

var svg = document.getElementById("svg");
var title = document.getElementById("title");

var x_vals = [9, 8, 6];//temp data
var y_vals = [5, 8, 4];//temp data
var data = [];

for (var i = 0; i < x_vals.length; i +=1){
    console.log(i);
    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("fill", "green");
    c.setAttribute("r", "5");
    svg.appendChild(c);
}

var plot = function(){
    var circles = d3.selectAll("circle");
    circles.data(x_vals);
    circles.attr("cx", function(d){return 30 + (d * 25)}); //left margin of 30
    circles.data(y_vals);                                  //for x-axis
    circles.attr("cy", function(d){return 370 - (d * 25)});//bottom margin of 30
                                                           //for y-axis
}

plot();
//add in axis later
