# Pretty JWT

> a cli to print pretty JWT


## Usage


```
# Install
npm install -g pretty-jwt
jwp <jwt>

# or use directly
npx pretty-jwt <jwt>
```

The install commands provides the command `jwp` *that is for `jw`<t> `p`<rint>*


## Examples 

```
jwp eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InNweW5hIiwiaWF0IjoxNzI2MjM5MDIyfQ.2k-IPAVDXSuEVKUKIh_qNB_6SwNnA4muLbTMy5lfNYI

```

will print

```
-------  PRETTY JWT ------- 

{
  "alg": "HS256",
  "typ": "JWT"
}
.
{
  "sub": "1234567890",
  "name": "spyna",
  "iat": 1726239022
}
```

## Errors 

Errors are detected and printed

Example 

```
jwp "<an invalid JWT>"
```

will print 

```
 ⚠️  invalid base64: "<an invalid JWT>"

<an invalid JWT>
```


## Development 

### Release and publish

```
#npm run release
yarn release
npm publish --dry-run
git push --follow-tags origin main
npm publish 
```