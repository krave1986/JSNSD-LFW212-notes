const fs = require("fs")
const { promisify } = require('util')

const getDir = promisify(fs.readdir)
const rename = promisify(fs.rename)

const path = require("path")

const pdfDir = path.join(__dirname, "pdfs")

async function run() {
    const list = await getDir(pdfDir)
    console.log(list);
    for (const entry of await getDir(pdfDir)) {
        await rename(path.join(pdfDir, entry), path.join(pdfDir, entry + ".pdf"))
    }
}

run()

