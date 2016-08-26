# Madroft
Hai-pafoomansu DDoC (Distributed Denial of santa Claus) debaisu against Madroft 1.7.

```js
loginBufs = (nicks, isForge, version) =>
  nicks.map((n) => 
    unescape(encodeURIComponent(n))
  ).map((u8) => 
    [0x06, 0x00, version, 0x00] +
    (isForge
      ? [0x67, 0x36]
      : [0x63, 0xdd]) +
    [0x02, u8.length + 2, 0x00, u8.length] +
    Array.prototype.map.call(u8, (x) => x.charCodeAt(0))
  }).map((ar) =>
    new Buffer.from(ar)
  )
```
