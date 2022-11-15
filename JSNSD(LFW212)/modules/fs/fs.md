# [fs](https://nodejs.org/api/fs.html)

## methods

### [fs.mkdirSync(path[, options])](https://nodejs.org/api/fs.html#fsmkdirsyncpath-options)

### [fs.openSync(path[,flags[,mode]])](https://nodejs.org/api/fs.html#fsopensyncpath-flags-mode)

The `'w'` we used in `node -e "fs.openSync('www', 'w')"` is one of the [File system flags](https://nodejs.org/api/fs.html#file-system-flags) which means

> Open file for reading. The file is created (if it does not exist) or truncated (if it exists).

