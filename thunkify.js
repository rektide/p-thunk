module.exports= function( sindre){
	return function( a, b, c, d, e){
		return function( input){
			return sindre( input, a, b, c, d, e)
		}
	}
}
