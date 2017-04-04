const alfy = require('alfy')
alfy.output([
  {
    title: alfy.input,
    subtitle: 'RUN ' + alfy.input,
    arg: process.argv.slice(2).join(' ')
  }
])
