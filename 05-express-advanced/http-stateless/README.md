## Problem: Http is Stateless

## Solution 1: Cookies

Cookies are data that has a lifespan that will be sent on every request.
- Who can set the cookie?

client or server

- What do we save in cookies?

Session management
  Logins, shopping carts, game scores, or anything else the server should remember
Personalization
  User preferences, themes, and other settings
Tracking
  Recording and analyzing user behavior

- What we don't save in Cookies:

Sensitive information like: Email, password, secret tokens

- Beware saving too much data

it is sent on every request

- Beware of CSRF

the cookies are auto sent even if the request originates from: evil.com
consider setting the Same-Site (not supported on every browser but is supported on the major ones).

- consider using secure

otherwise the cookies are exposed

## Solution 2: Session

What is session

- the server is creating a session id
- sends the session id to the client usually on the cookies
- server is sending in the cookies: Session Id: sdfasfasdf234234sasdf
- server is mapping the session id to data we save on the user
- req.session.hello = world
- beware of CSRF use sameSite






