# Manipulating data with RESTful services

## Code base
We will reuse the code base we left in Chapter 5.

## Idempotent or not

POST | PUT
--- | ---
❎ | ✅

- Creating
  POST request can create several entries with same request data. PUT can only create one entry with same request even multiple requests sent to the server.

  So ID is a must for PUT. But it is not the case for POST.

  POST requests for creating don't need to know ID first for creating. It can leave the job to other parts of the project to assign IDs to entries. For example, databases. In such cases, POST would be more efficient and involve less logic.

- Updating
  Both POST and PUT request must include an ID to know which entry to update.

- Key point
  If POST request for both creating and updating same kind of entries, one should **NOT** use same route for different purposes. The routes for different purposes must be separated.