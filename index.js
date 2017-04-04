const alfy = require('alfy')
const { join, dirname } = require('path')

const exec = function (args, opts = {}) {
  return new Promise(function (resolve) {
    var proc = require('child_process').exec(args, { env: Object.assign({}, process.env, { isPipe: false }) }, (err, ret) => resolve(err || ret))
    proc.stderr.on('data', err => {
      process.stdout.write(err)
    })
  })
}

const fire = join(dirname(require.resolve('node-fire')), 'bin/index.js')
function run () {
  exec('node ' + fire + ' ' + process.argv.slice(2).join(' ')).then(function (res) {
    alfy.output(String(res).trim().split('\n').map(ret => (
      {
        title: ret,
        autocomplete: ret,
        subtitle: 'RUNNING ' + alfy.input,
        arg: ret
      }))
    )
  })
}
setTimeout(run, 500)
