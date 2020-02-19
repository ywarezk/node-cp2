## Cors

What is CORS

- Cross Origin Resource Sharing
- browser defense
- if the browser is sending a request to a different url from where im am sitting
  - im in evil.com
  - evil.com is sending request to bank.com browser needs to check cors
  - sometime i want the cors to pass
    - checkpoint.com is sending request to checkpoint1.com
    - api.checkpoint.com
- if the browser sends standard requests
  - GET, POST

Cors is working like this
- Browser identifies a request to a different domain
- Browser will send a preflight request: Option
  - browser is asking the server: listen im going to issue a get request from evil.com am I allow