/* event loop has 4 phases:
--> expired time out callback
--> I/O process 
--> setImmediate callbacks
--> close callback

==>the other micro task ques are process.nextTick() and promises.then(res) are
these will execute after each phase not after each event loop

==> all crypto functions are goes to thread pools. so with same time it will finish all crypto tasks before

===>>> don't use sync methods inside call backs.

even loop will only take place when callback triggers only.. so if u use timeout or intervals directly it don't goes to node event loops phases..

*/

const fs = require('fs')
const crypto = require('crypto')

const start = Date.now()
fs.readFile(`${__dirname}/text/final.txt`, 'utf-8', (err, data) => {
  console.log('file read done---')
  setTimeout(() => {
    console.log('testing set time out')
  }, 1000)
  setTimeout(() => {
    console.log('testing set time out zero--')
  }, 0)
  setImmediate(() => {
    console.log('set immediate--') // this will exceute in I/O pase event loops pauses and looks fot timeout if not then immediate calls backs trigger
  })
  const promise = new Promise((resolve, reject) => {
    //   resolve('arjun')
    setTimeout(() => {
      resolve('arjun')
    }, 1000)
  })
  promise.then((res) => console.log('promise called--', res))
  process.nextTick(() => {
    console.log('nextTick called-----')
  })
  crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err
    console.log(Date.now() - start, derivedKey.toString('hex'))
  })
  crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err
    console.log(Date.now() - start, derivedKey.toString('hex'))
  })
  crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err
    console.log(Date.now() - start, derivedKey.toString('hex'))
  })
  crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err
    console.log(Date.now() - start, derivedKey.toString('hex'))
  })
})
console.log('top code level')
