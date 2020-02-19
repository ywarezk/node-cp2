## Authentication / Authorization

- Who are you?
- Am I allowed?

## how can identify a user?

- token: JWT, token authentication
- email password
- facebook
- github
- linked
- oauth
- twitter
- gmail
- google

## We can split the them to the following families

- using session
- not using session - token we send the token with every request

## JWT

after i identify the user I create a token for that user -> JWT token
client needs to save that token and send the token on every request.

### If you are using JWT you do not need session installed

## How the client sends the token

- We need to give the client a login api
  - POST /api/user/login => Body: email and password
- if the user is authenticated we create a JWT token in that token we can save the userId
- the client needs to save that token
- on every request the client is sending he needs to send the JWT token
  - Authorization: Bearer `<jwt token>`

- /api/todo










