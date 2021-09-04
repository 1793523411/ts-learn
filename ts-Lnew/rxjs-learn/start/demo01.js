const Rx = require("rxjs");

var observable = Rx.Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});

console.log("just before subscribe");
observable.subscribe({
  next: (x) => console.log("got value " + x),
  error: (err) => console.error("something wrong occurred: " + err),
  complete: () => console.log("done"),
});
console.log("just after subscribe");

var foo = Rx.Observable.create(function (observer) {
  console.log("Hello");
  observer.next(42);
});

foo.subscribe(function (x) {
  console.log(x);
});
foo.subscribe(function (y) {
  console.log(y);
});
