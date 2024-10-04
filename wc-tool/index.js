const fs = require('node:fs')

const filePathArgument = process.argv[process.argv.length - 1]

var data = undefined

try {
    data = fs.readFileSync(filePathArgument, 'utf8')
} catch(err) {
    console.error("No file found for provided path")
    return
}

let countFlagIndex = process.argv.indexOf("-c")

if(countFlagIndex !== -1) {
    const fileByteArray = Array.from(Buffer.from(data))
    console.log(fileByteArray.length)
    return
}
