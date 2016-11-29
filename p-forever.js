var sindre= require( "p-forever")
module.exports= function(fn){
	return function(initial){
		return sindre(fn, initial)
	}
}
