$(document).ready(function(){

	$( "#get_color" ).click(function( event ) {
    	console.log('submission');
    	 //prevent the default action for that event from happening
    	event.preventDefault();

        //change the background color of the cell number returned to the color - WITHOUT MODIFYING THE HTML
        // see index.rb
        // post '/color' do
            // Not so different than CSS manipulation
            // 'li:nth-child' response.cell --> establishing the coorindates
            // background color is set

        $.post('/color', function(response){
            $('li:nth-child(' + response.cell + ')')
                .css('background-color', response.color);
        }, "json");
    });
});