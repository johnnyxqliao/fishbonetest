$(window).resize(resizeCanvas);
function resizeCanvas() {
var width = $(window).get(0).innerWidth;
var height = $(window).get(0).innerHeight;
$("#canvas").attr("width", width);
$("#canvas").attr("height", height);
}
resizeCanvas();