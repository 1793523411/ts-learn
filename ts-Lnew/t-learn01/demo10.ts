{
  let never: never = (() => {
    throw Error("never");
  })();
  let a: number = never; // ok
  let b: () => any = never; // ok
  let c: {} = never; // ok
}
{
  let unknown: unknown;
  //   const a: number = unknown; // ts(2322)
  //   const b: () => any = unknown; // ts(2322)
  //   const c: {} = unknown; // ts(2322)
}

{
  let thisIsAny: any;
  let thisIsNever: never;
  let thisIsUnknown: unknown;
  let thisIsVoid: void;
  let thisIsUndefined: undefined;
  let thisIsNull: null;
  thisIsAny = thisIsVoid; // ok
  thisIsUnknown = thisIsVoid; // ok
  thisIsVoid = thisIsAny; // ok
  thisIsVoid = thisIsNever; // ok
  thisIsVoid = thisIsUndefined; // ok
  thisIsAny = thisIsNull; // ok
  thisIsUnknown = thisIsNull; // ok
  thisIsAny = thisIsUndefined; // ok
  thisIsUnknown = thisIsUndefined; // ok

  thisIsNull = thisIsAny; // ok
  thisIsNull = thisIsNever; // ok
  thisIsUndefined = thisIsAny; // ok
  thisIsUndefined = thisIsNever; // ok
}
{
  enum A {
    one,
  }
  let num: number = A.one; // ok
  let fun = (param: A) => void 0;
  fun(1); // ok
}

{
  const one = 1;
  let num: number = one; // ok
  interface IPar {
    name: string;
  }
  interface IChild extends IPar {
    id: number;
  }
  let Par: IPar;
  let Child: IChild;
  Par = Child; // ok
  class CPar {
    cname = "";
  }
  class CChild extends CPar {
    cid = 1;
  }
  let ParInst: CPar;
  let ChildInst: CChild;
  ParInst = ChildInst; // ok
  let mixedNum: 1 | 2 | 3 = one; // ok

  let ICPar2: IPar | CPar;
  let ICChild2: IChild | CChild;
  ICPar2 = ICChild2; // ok
}

{
  interface Event {
    timestamp: number;
  }
  interface MouseEvent extends Event {
    x: number;
    y: number;
  }
  //   function addEventListener(handler: (n: Event) => void) {}
  //   addEventListener((e: MouseEvent) => console.log(e.x + "," + e.y)); // ts(2769)
  function addEventListener(handler: (n: MouseEvent) => void) {}
  addEventListener((e: Event) => console.log("")); // ts(2769)
}
