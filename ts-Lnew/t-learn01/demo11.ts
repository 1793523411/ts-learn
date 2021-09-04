{
  const animal = {
    id: 1,
    name: "animal",
  };
  type Animal = typeof animal;
  const animalFun = () => animal;
  type AnimalFun = typeof animalFun;
}

{
  type Merge<A, B> = {
    [key in keyof A | keyof B]: key extends keyof A
      ? key extends keyof B
        ? A[key] | B[key]
        : A[key]
      : key extends keyof B
      ? B[key]
      : never;
  };
  type Merged = Merge<
    { id: number; name: string },
    { id: string; age: number }
  >;
}

{
  type IsAny<T> = 0 extends 1 & T ? true : false;
  type EqualV3<S, T> = IsAny<S> extends true
    ? IsAny<T> extends true
      ? true
      : false
    : IsAny<T> extends true
    ? false
    : [S] extends [T]
    ? [T] extends [S]
      ? true
      : false
    : false;
  type ExampleV31 = EqualV3<1 | (number & {}), number>; // true but false got
  type ExampleV32 = EqualV3<never, never>; // true
  type ExampleV34 = EqualV3<any, any>; // true
  type ExampleV33 = EqualV3<any, number>; // false
  type ExampleV35 = EqualV3<never, any>; // false
}
