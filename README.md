# Madroft
Hai-pafoomansu DDoC (Distributed Denial of santa Claus) debaisu against Madroft 1.7.

```js
loginBufs = (nicks, isForge, version) =>
  nicks.map((n) => 
    [0x06, 0x00] + 
  }).map((f) =>
    new Buffer.from(f)
  )
```

```vb
Function GetPacket_Login(Username As String, Session As String, Forge As Boolean, Version As Long) As String
Dim Packet As String
If Forge = True Then
    Packet = "06 00 " & Hex(Version) & " 00 67 36 02 " & Hex(Len(Username) + 2) & " 00 " & Hex(Len(Username))
Else
    Packet = "06 00 " & Hex(Version) & " 00 63 DD 02 " & Hex(Len(Username) + 2) & " 00 " & Hex(Len(Username))
End If
For i = 1 To Len(Username)
    Packet = Packet & " " & Hex(AscW(Mid(Username, i, 1)))
Next i
GetPacket_Login = Packet
End Function
```
