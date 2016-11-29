var sindre= require( "p-whilst")
module.exports= function( condition, action){
	return function( input){
		return sindre( condition, function(){
			return action( input)
		})
	}
}
