# Handlebars

## Syntax

- `{{{   }}}`

  3 braces denotes an interpolation point with **raw** content.

- `{{   }}`

  2 braces denotes an interpolation point with **escaped** content.
  For example, `<` will be escaped to `&lt;`.

## Template local

- `body`
  It will be available if we specified `layout` option when we registered `handlebars`.