class A {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  add(a: number, b: number): number {
    return a + b;
  }
}

//   const a1: A = {}; // ts(2741) Property 'name' is missing in type '{}' but required in type 'A'.

const a2: A = { name: "a2", add(a: any, b: any): any { a - b } }; // ok
// const a3: A = { name: "a2"}; // ok

const a4 = new A('ygj')