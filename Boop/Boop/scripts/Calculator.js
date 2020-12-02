/**
 {
		"api":1,
		"name":"Calculator",
		"description":"Calculate Digital",
		"author":"miss",
		"icon":"command",
		"tags":"dig,cal"
	}
 **/

function main(input) {
    var result = eval(input.text)
    input.text = result
}