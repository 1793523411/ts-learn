//接口类型，类型别名
{
  function Study(language: { name: string; age: () => number }) {
    console.log(
      `ProgramLanguage ${language.name} created ${language.age()} years ago.`
    );
  }
  Study({
    name: "TypeScript",
    age: () => new Date().getFullYear() - 2012,
  });
  //   Study({
  //     name: 2,
  //     age: () => new Date().getFullYear() - 2012,
  //   });
  //   Study({
  //     name: "TypeScript",
  //   });
  //   Study({
  //     id: 2,
  //     name: "TypeScript",
  //     age: () => new Date().getFullYear() - 2012,
  //   });
  let ts = {
    id: 2,
    name: "TypeScript",
    age: () => new Date().getFullYear() - 2012,
  };
  Study(ts); // ok
}
{
  interface ProgramLanguage {
    /** 语言名称 */
    name: string;
    /** 使用年限 */
    age: () => number;
  }
  let TypeScript: ProgramLanguage;
  TypeScript = {
    name: "TypeScript",
    age: () => new Date().getFullYear() - 2012,
    // id: 1,
  };
  function Study(language: ProgramLanguage) {
    console.log(
      `ProgramLanguage ${language.name} created ${language.age()} years ago.`
    );
  }
  Study({
    name: "TypeScript",
    age: () => new Date().getFullYear() - 2012,
  });
  //   Study({
  //     name: 2,
  //     age: () => new Date().getFullYear() - 2012,
  //   });
  //   Study({
  //     name: "TypeScript",
  //   });
  //   Study({
  //     id: 2,
  //     name: "TypeScript",
  //     age: () => new Date().getFullYear() - 2012,
  //   });
  let ts = {
    id: 2,
    name: "TypeScript",
    age: () => new Date().getFullYear() - 2012,
  };
  Study(ts); // ok
}

{
  {
    // interface StringMap {
    //   [prop: string]: number;
    //   age: number; // ok
    //   name: string; // ts(2411) name 属性的 string 类型不能赋值给字符串索引类型 number
    // }
    // interface NumberMap {
    //   [rank: number]: string;
    //   1: string; // ok
    //   0: number; // ts(2412) 0 属性的 number 类型不能赋值给数字索引类型 string
    // }
    interface LanguageRankInterface {
      name: string; // ok
      0: number; // ok
      //   [rank: string]: string;
      //   [name: string]: number;
    }
  }
}
{
  interface LanguageRankInterface {
    [rank: number]: string;
  }
  interface LanguageYearInterface {
    [name: string]: number;
  }
  {
    let LanguageRankMap: LanguageRankInterface = {
      1: "TypeScript", // ok
      2: "JavaScript", // ok
      //   'WrongINdex': '2012' // ts(2322) 不存在的属性名
    };

    let LanguageMap: LanguageYearInterface = {
      TypeScript: 2012, // ok
      JavaScript: 1995, // ok
      1: 1970, // ok
    };
  }
}

{
  interface ProgramLanguage {
    /** 语言名称 */
    name: string;
    /** 使用年限 */
    age: () => number;
  }
  {
    interface DynamicLanguage extends ProgramLanguage {
      rank: number; // 定义新属性
    }

    interface TypeSafeLanguage extends ProgramLanguage {
      typeChecker: string; // 定义新的属性
    }

    /** 继承多个 */

    interface TypeScriptLanguage extends DynamicLanguage, TypeSafeLanguage {
      name: "TypeScript"; // 用原属性类型的兼容的类型(比如子集)重新定义属性
      rank: 9;
    }
  }
}
{
  interface ProgramLanguage {
    /** 语言名称 */
    name: string;
    /** 使用年限 */
    age: () => number;
  }
  {
    type LanguageType = {
      /** 以下是接口属性 */
      /** 语言名称 */
      name: string;
      /** 使用年限 */
      age: () => number;
    };
  } /** 联合 */
  type MixedType = string | number;
  /** 交叉 */
  type IntersectionType = { id: number; name: string } & {
    age: number;
    name: string;
  };
  /** 提取接口属性类型 */
  type AgeType = ProgramLanguage["age"];
}
