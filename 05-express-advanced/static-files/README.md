## Static Files

fonts, css, js , html that you have in your files and you just want to send them to the client

## Problem

Express is not ideal for dealing with static files
- slow
- bad caching

What is good with static files
- Reverse Proxy : nginx, apache, IIS
- CDN => s3 => cloudfront

Use express.static
but make sure it is cached later on
header ETAG

