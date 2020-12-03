/**
 {
		"api":1,
		"name":"Calculator",
		"description":"Calculate Digital",
		"author":"miss",
		"icon":"command",
		"tags":"cal,dig"
	}
 **/

function main(input) {
    var result = input.text
    try {
        result = eval(input.text)
    }catch (e) {

    }
    input.text = result
}