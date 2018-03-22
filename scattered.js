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


var x_vals = [5,5,10.2,5,7.6,6,12,10.8,6.2,5.8,4.6,6.8,5,4.6,3.8,14.2,5.2,6.2,5.2,12.4]
var y_vals = [4.4,6.4,10,5,6.6,5.4,9,9.4,6,8.8,4.6,7.8,4.8,4.4,3.2,14.6,5.4,7.2,4.8,12]


for (var i = 0; i < x_vals.length; i +=1){
    console.log(i);
    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("fill", "green");
    c.setAttribute("r", "5");
    svg.appendChild(c);
}

var labelsX = d3.select("svg").selectAll("text").data(x_vals)
labelsX.append("text")
  .attr("x", function(d) { return  d[0] + 30; })
  .attr("y", function() { return 459; })
  .text(function(d){
    return d[0] *5;
  });

var labelsY = d3.select("svg").selectAll("text").data(y_vals)
labelsY.append("text")
  .attr("x", function(d) { return 30; })
  .attr("y", function() { return d[0] + 105; })
  .text(function(d)
{
  return d[0]*5 ;
})

var plot = function(){
    var circles = d3.selectAll("circle");
    circles.data(x_vals);
    circles.attr("cx", function(d){return 30 + (d * 25)}); //left margin of 30
    circles.data(y_vals);                                  //for x-axis
    circles.attr("cy", function(d){return 400 - (d * 25)});//bottom margin of 30                                                    //for y-axis
}

plot();
