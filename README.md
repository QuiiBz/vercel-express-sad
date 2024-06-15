# Istari Demo Endpoints

Vercel and Express are Sad Together. Where body?


## Good
```
curl --location 'http://localhost:3000/greet' \                        
--header 'Content-Type: application/json' \
--data '{
    "name": "maggie"
}'
```

## Bad

```
curl --location 'https://vercel-express-sad.vercel.app/greet' \
--header 'Content-Type: application/json' \
--data '{
    "name": "maggie"
}'
```