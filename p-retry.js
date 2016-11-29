var
  sindre= require( "p-retry"),
  thunkify= require( "./thunkify")
module.exports= thunkify( sindre) 
