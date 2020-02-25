---
title: 'Optional Chaining'
description: 'Everything about JavaScript Optional Chaining'
avgReadingTime: '2 min read'
date: '2020-02-25'
---

An optional chain is a chain of one or more property accesses and function calls, the first of which begins with the token `?.`.

Long chains of property accesses in JavaScript can be error-prone, as any of them might evaluate to `null` or `undefined` (also known as “nullish” values).

Checking for property existence on each step easily turns into a deeply-nested structure of if-statements.

```js
// Error prone-version, could throw.
const nameLength = db.user.name.length;

// Less error-prone, but harder to read.
let nameLength;
if (db && db.user && db.user.name) {
  nameLength = db.user.name.length;
}
```

Using the new optional chaining operator, we can rewrite the above example as follows:

```js
// Still checks for errors and is much more readable.
const nameLength = db?.user?.name?.length;
```

The `?.` operator functions similarly to the `.` chaining operator, except that instead of causing an error if a reference is nullish (`null` or `undefined`), the expression short-circuits with a return value of `undefined`.

When used with function calls, it returns `undefined` if the given function does not exist.

```js
let result = someInterface.customMethod?.();
```

> Note: If there is a property with such a name and which is not a function, using `?.` will still raise a `TypeError` exception (`x.y` is not a function).

## Optional callbacks or event handlers

```js
// Written as of ES2019
function doSomething(onContent, onError) {
  try {
    // ... do something with the data
  } catch (err) {
    if (onError) {
      // Testing if onError really exists
      onError(err.message);
    }
  }
}
```

```js
// Using optional chaining with function calls
function doSomething(onContent, onError) {
  try {
    // ... do something with the data
  } catch (err) {
    // no exception if onError is undefined
    onError?.(err.message);
  }
}
```

## Optional chaining with expressions

```js
let nestedProp = obj?.['prop' + 'Name'];
```

## Optional chaining with an array

```js
let arrayItem = arr?.[42];
```

> Optional chaining is forbidden in write contexts such as `a?.b = c`.
> Optional deletion as in: `delete a ?.b` is supported.

Let's see what babel transpiler does with this Optional chaining syntax

```js
const nameLength = db?.user;
```

It transpile into

```js
var _db;

var nameLength = (_db = db) === null || _db === void 0 ? void 0 : _db.user;
```

If you don't know what `void 0` does, it evaluates the given expression and then returns `undefined`.

## Syntax

```js
obj?.prop; // Object
obj?.[expr]; // Expressions
arr?.[index]; // Array
func?.(args); // Function calls
```

### Resources

1. [V8](https://v8.dev/features/optional-chaining)
2. [tc39](https://tc39.es/proposal-optional-chaining/)
3. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

Thanks for reading!
