interface Entity {
  add: (a: number, b: number) => number;

  del(a: number, b: number): number;
}

const entity: Entity = {
  del: (a, b) => a + b,

  add(a, b) {
    return a - b;
  },
};

function computeTypes(one: string, two: number) {
  const nums = [two];

  const strs = [one];

  return {
    nums,

    strs,
  }; // 返回 { nums: number[]; strs: string[] } 的类型
}

type AnyType = boolean;
type AnyReturnType = string;
type AnyNextType = number;
function* gen(): Generator<AnyType, AnyReturnType, AnyNextType> {
  const nextValue = yield true; // nextValue 类型是 number，yield 后必须是 boolean 类型
  return `${nextValue}`; // 必须返回 string 类型
}

// function convert(x: string | number | null): string | number | -1 {

//     if (typeof x === 'string') {

//         return Number(x);

//     }

//     if (typeof x === 'number') {

//         return String(x);

//     }

//     return -1;

// }

// const x1 = convert('1'); // => string | number

// const x2 = convert(1); // => string | number

// const x3 = convert(null); // => string | number

function convert(x: string): number;

function convert(x: number): string;

function convert(x: null): -1;

function convert(x: string | number | null): any {
  if (typeof x === "string") {
    return Number(x);
  }

  if (typeof x === "number") {
    return String(x);
  }

  return -1;
}

const x1 = convert("1"); // => number

const x2 = convert(1); // => string

const x3 = convert(null); // -1

function isString(s:unknown): s is string {
  // 类型谓词

  return typeof s === "string";
}

function isNumber(n: number) {
  return typeof n === "number";
}

function operator(x: unknown) {
  if (isString(x)) {
    // ok x 类型缩小为 string
  }

//   if (isNumber(x)) {
//     // ts(2345) unknown 不能赋值给 number
//   }
}

// 使用 unknown 后，TypeScript 会对它做类型检测。但是，如果不缩小类型（Type Narrowing），我们对 unknown 执行的任何操作都会出现错误
