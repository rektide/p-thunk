#!/usr/bin/env node
"use strict"

var
  pthunk= require( ".."),
  tape= require( "tape")

tape("all modules can import", function(t){
	var keys= Object.keys(pthunk)
	t.plan( keys.length)
	for(var i in pthunk){
		var val= pthunk[i]
		t.ok( val, `${i} exists`)
	}
	t.end()
})
