var sindre= require( "p-times")
module.exports= function( count, mapper, options){
	return function( input){
		return sindre( count, function( i){
			mapper(i, input)
		}, options)
	}
}
