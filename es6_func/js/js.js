const log = console.log

const curry = f =>
    (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);
/*const map = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(f(a));
    }
    return res;
});
*/

/*
const map = curry((f, iter) => {
    let res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
        const a = cur.value;
        res.push(f(a));
    }
    return res;
});
*/



/*
const filter = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
        if (f(a)) {
            res.push(a);
        }
    }
    return res;
});
*/

/*
const filter = curry((f, iter) => {
    let res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
        const a = cur.value;
        if (f(a)) { res.push(a); }
    }
    return res;
});
*/

/*
const reduce = curry((f, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (const a of iter) {
        acc = f(acc, a)
    }
    return acc;
});
*/

const reduce = curry((f, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    } else {
        iter = iter[Symbol.iterator]();
    }
    let cur;
    while (!(cur = iter.next()).done) {
        const a = cur.value;
        acc = f(acc, a);
    }
    return acc;
});

const range = l => {
    let i = -1;
    let res = [];
    while (++i < l) {
        res.push(i);
    }
    return res;
}

/*
const take = curry((l, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(a);
        if (res.length == l) {
            return res;
        }
    }
    return res;
});
*/

const take = curry((l, iter) => {
    let res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
        const a = cur.value;
        res.push(a);
        if (res.length == l) {
            return res;
        }
    }
    return res;
});

const L = {};
L.range = function*(l) {
    let i = -1;
    while (++i < l) {
        yield i;
    }
}

/*
L.map = curry(function*(f, iter) {
    for (const a of iter) {
        yield f(a);
    }
});
*/

const takeAll = take(Infinity);

L.map = curry(function*(f, iter) {
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
        const a = cur.value;
        yield f(a);
    }
});

const map = curry(pipe(L.map, takeAll));
/*
L.filter = curry(function*(f, iter) {
    for (const a of iter) {
        if (f(a)) { yield a };
    }
});
*/

L.filter = curry(function*(f, iter) {
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
        const a = cur.value;
        if (f(a)) {
            yield a;
        }
    }
});

const filter = curry(pipe(L.filter, takeAll));

const find = curry((f, iter) => go(
    iter,
    L.filter(f),
    take(1),
    ([a]) => a
));

const isIterable = a => a && a[Symbol.iterator];
/*
L.flatten = function*(iter) {
    for (const a of iter) {
        if (isIterable(a)) {
            for (const b of a) yield b;
        } else yield a;
    }
}
*/

L.flatten = function*(iter) {
    for (const a of iter) {
        if (isIterable(a)) yield* a;
        else yield a;
    }
}

const flatten = pipe(L.flatten, takeAll);

L.flatMap = curry(pipe(L.map, L.flatten));
const flatMap = curry(pipe(L.map, flatten));