var sindre= require( "p-try")
module.exports= function( fn){
	return function( input){
		return sindre( function(){
			return fn( input)
		})
	}
}
