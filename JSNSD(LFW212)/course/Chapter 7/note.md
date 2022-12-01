# Consuming and aggregating services

## Convention and Service Discovery

### How to find a service?

Inject values into the process at deployment-time.

A URL pointed to a service is injected as an env.

1. Get the base URLs of the services you want to talk with:

   ```javascript
   const { BICYCLE_SERVICE, BOAT_SERVICE } = process.env
   ```

2. Use ports instead of URLs

   ```javascript
   const { BICYCLE_SERVICE_PORT, BOAT_SERVICE_PORT} = process.env
   const http = require('http')
   const bicycleSrv = `http://localhost:${BICYCLE_SERVICE_PORT}`
   http.get({`${bicycleSrv}/some/route`, res => {}})
   ```

## Combining Data

Don't send back what a user sent to the service.

