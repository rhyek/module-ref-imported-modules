# how to test

```bash
npm run start:dev
```

```bash
# works with normal injection through constructor
curl localhost:3000/auth-works
# error when using moduleRef.resolve
curl localhost:3000/auth-error
# works when using moduleRef.resolve with { strict: false }
curl localhost:3000/auth-works-with-strict-false
```
