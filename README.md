# deployement

1.Install mongodb and node js

2. Create .env file with following variables:

```
DB_URL= 'mongodb://localhost:27017/cryptorentals'
ADMIN_ADDRESS = '<ADMIN_ADDRESS>'
```
3.``` npm i ```

4. Run following command to setup ganache and deploy contract on truffle:
``` 
npm i truffle -g
truffle init
npm install ganache-cli -g
ganache-cli
truffle compile
truffle migrate
```

**Run command to start the project:**
``` 
npm run start
```
**Backend service will be up on:**
base url: http://localhost:8082
