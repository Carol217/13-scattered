// Team acDC
// Carol Pan and Donia Tung
// SoftDev2 pd7
// K13 - Scattered
// 2018-03-21

var svg = document.getElementById("svg");
var title = document.getElementById("title");

var x_axis = document.createElementNS("http://www.w3.org/2000/svg", "line");
x_axis.setAttribute("x1", 30);
x_axis.setAttribute("x2",800);
x_axis.setAttribute("y1", 400);
x_axis.setAttribute("y2", 400);
x_axis.setAttribute("stroke-width", 2);
x_axis.setAttribute("stroke", "black");
svg.appendChild(x_axis);

var y_axis = document.createElementNS("http://www.w3.org/2000/svg", "line");
y_axis.setAttribute("y1", 0);
y_axis.setAttribute("y2", 400);
y_axis.setAttribute("x1", 30);
y_axis.setAttribute("x2", 30);
y_axis.setAttribute("stroke-width", 2);
y_axis.setAttribute("stroke", "black");
svg.appendChild(y_axis);


//var x_vals = [12, 12, 6];//temp data
//var y_vals = [12, 17, 4];//temp data
var data = [];

var x_vals = [8,8.5,8.5,9.5,8.5,11,10.5,12.5,15,17.5,15,16,20]
var y_vals = [6,6,7,7,7.5,8,9,9.5,10,11,10,10.5,11]


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
    circles.attr("cy", function(d){return 400 - (d * 25)});//bottom margin of 30                                                    //for y-axis
}

plot();
//add in axis later
