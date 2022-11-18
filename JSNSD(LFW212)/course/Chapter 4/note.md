# Chapter 4: Serving Web Content

Due to through out the course, tutor using same code bases, so our code is still located in `../Chapter 3` directory.

We optionally `require()` and `fastify.register()` the `fastify-static` plugin based on the condition of variable `dev`.

Notice that the content of our `index.html`. Now `<a />` points to `/hello.html` instead of `/hello` because it is currently a static HTML file instead of a route.

