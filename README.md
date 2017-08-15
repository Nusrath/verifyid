# verifyid
NodeJS wrapper for verifyid.co.za ID Validation API

## Usage
```javascript

var VerifyID = require('verifyid')

var verify = new VerifyID('username', 'password')

verify.my_credits((res) => {
  console.log(res)
})

verify.said_verification('SOME_ID_NUMBER', (res) => {
  console.log(res)
})

```
