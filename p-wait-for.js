var sindre= require( "p-wait-for")
module.exports= function( condition, interval){
	return function( input){
		return sindre(function(){
			return condition( input)
		}, interval)
	}
}
