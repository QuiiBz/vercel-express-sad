# Vercel and Express Are Sad

Vercel and Express are Sad Together. Where body?


## Good
```
curl -H 'Content-Type: application/json' \
      -d '{ "title":"foo","body":"bar", "id": 1}' \
      -X POST \
      http://localhost:3000/greet
/// outputs
{"title":"foo","body":"bar","id":1}%  
```

## Bad

```
curl -H 'Content-Type: application/json' \
      -d '{ "title":"foo","body":"bar", "id": 1}' \
      -X POST \
      https://vercel-express-sad.vercel.app/greet
/// outputs nothing
```
