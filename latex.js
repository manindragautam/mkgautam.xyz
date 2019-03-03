// RUN `node latex` to generate pdf

const latex = require('node-latex')
const fs = require('fs')

const input = fs.createReadStream('./static/resume.tex')
const output = fs.createWriteStream('./static/resume.pdf')
const pdf = latex(input)

pdf.pipe(output)
pdf.on('error', err => console.error(err))