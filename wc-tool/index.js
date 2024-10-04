const fs = require('node:fs')

const filePathArgument = process.argv[process.argv.length - 1]

var data = undefined

try {
    data = fs.readFileSync(filePathArgument, 'utf8')
} catch(err) {
    console.error("No file found for provided path")
    return
}

if(process.argv.indexOf("-c") !== -1) {
    const fileByteArray = Array.from(Buffer.from(data))
    console.log(`${fileByteArray.length} ${filePathArgument}`)
    return
}

if(process.argv.indexOf("-l") !== -1) {
    const dataByLines = data.split("\n")
    console.log(`${dataByLines.length} ${filePathArgument}`)
}