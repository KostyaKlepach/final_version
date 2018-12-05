$(function(){
 
 $('#demo1').jrumble({
 x: 2,
 y: 2,
 rotation: 1
 });
$('#demo1').hover(function(){
$(this).trigger('startRumble');
}, function(){
$(this).trigger('stopRumble');
});
});