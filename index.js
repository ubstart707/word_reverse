let input = process.stdin
input.setEncoding('utf-8')



console.log("write something:")

function revereString(str) {
    let strSplit = str.split("")
    let reverseArrey = strSplit.reverse()
    let joinArrey = reverseArrey.join("")

    console.log(joinArrey)
}

input.on('data', function (data) {
    if (data === "exit\n") {
        process.exit()
    } else if (data === 'clear\n') {
        console.clear()
    } else {
        revereString(data)
    }
})

