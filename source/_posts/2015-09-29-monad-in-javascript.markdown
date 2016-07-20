---
layout: post
title: "MONAD in Javascript"
date: 2015-09-29 10:11:57 +0000
comments: true
categories:
---

####Axioms
```javascript
unit(value).bind(f) === f(value)
monad.bind(unit) === monad
monad.bind(f).bind(g) === monad.bind(function (value) {
    return f(value).bind(g);
})

```


```javascript
function MONAD() {
    return function unit(value) {
        var monad = Object.create(null);
        monad.bind = function (func) {
            return func(value);
        };
        return monad;
    }
}
```

```javascript
var identity = MONAD();
var monad = identity("Hello World");
monad.bind(alert());
```

```javascript
//Improved version
function MONAD() {
    var prototype = Object.create(null);
    function unit(value) {
        var monad = Object.create(prototype);
        monad.bind = function(func, args) {
            return func.apply(undefined, [value].concat(Array.prototype.slice.apply(args || [])));
        };
        return monad;
    }

    unit.method = function (name, func) {
        prototype[name] = func;
        return unit;
    }
    return unit;
}
```
