/**
 {
		"api":1,
		"name":"Hex To Dec",
		"description":"Convert hexadecimal to decimal",
		"author":"miss",
		"icon":"command",
		"tags":"hex,dig,dec"
	}
 **/
function main(input) {
    var strArray = input.text.split(";")
    strArray = strArray.map(str => {
        if (str.toUpperCase().startsWith("0X")) {
            return hex2dec(str.toUpperCase().substr(2))
        }else {
            return str
        }
    })
    input.text = strArray.join(";")

}

var hex2dec = function (hex) {
    var len = hex.length, a = new Array(len), code
    for (var i = 0; i < len; i++) {
        code = hex.charCodeAt(i)
        if (48 <= code && code < 58) {
            code -= 48
        } else {
            code = (code & 0xdf) - 65 + 10
        }
        a[i] = code
    }

    return a.reduce(function(acc, c) {
        acc = 16 * acc + c
        return acc
    }, 0)
}
