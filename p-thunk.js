var
  getter= require("getter-maker/require")()

getter({
	"p-cancelable": "./p-cancelable",
	"cancelable": "./p-cancelable",
	"p-is-promise": "./p-is-promise",
	"isPromise": "./is-promise",
	"p-lazy": "./p-lazy",
	"lazy": "./p-lazy"
}, module)
