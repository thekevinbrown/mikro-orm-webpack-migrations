# mikro-orm-webpack-migrations

Tries to get migrations working with Webpack and Mikro ORM

### To Run

- Clone the repo
- `npm i`
- Create a local empty Postgres database called `mikro-orm-test`.
- `npm start`

### Current output

```
init
getMigrator
up
(node:49939) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, scandir '/Users/kevin/development/mikro-orm-webpack-migrations/migrations'
(node:49939) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:49939) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
