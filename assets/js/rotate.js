$(function(){
	
    var $elie = $(".snurra"), degree = 0, timer, timesSpinned, data, form;
    rotate();
    function rotate() {
        
        $elie.css({ WebkitTransform: 'rotateX(' + '-' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotateX(' + '-' + degree + 'deg)'});
        $elie.css({ '-ms-transform': 'rotateX(' + '-' + degree + 'deg)'});
        $elie.css({ '-o-transform': 'rotateX(' + '-' + degree + 'deg)'});
        $elie.css({ 'transform': 'rotateX(' + '-' + degree + 'deg)'});

        timer = setTimeout(function() {
			degree += 90;
    		rotate();
        },2000);
    }
});