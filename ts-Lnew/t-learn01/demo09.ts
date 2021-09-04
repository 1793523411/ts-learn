//自定义类型守卫
{
  interface Dog {
    wang: string;
  }
  interface Cat {
    miao: string;
  }
  const isDog = function (animal: Dog | Cat): animal is Dog {
    return "wang" in animal;
  };
  const getName = (animal: Dog | Cat) => {
    if (isDog(animal)) {
      return animal.wang;
    }
  };
  const getName2 = <T extends Dog | Cat>(animal: T) => {
    if (isDog(animal)) {
      // instanceOf 亦可
      return animal.wang; // ok
    }
    return (animal as Cat).miao;
  };
  const getName4 = <T extends Dog | Cat>(animal: T) => {
    if (isDog(animal)) {
      // instanceOf 亦可
      return animal.wang; // ok
    }
    return animal.miao; // ts(2339)
  };
  const getName5 = <T extends Dog | Cat>(animal: T) => {
    if ("wang" in animal) {
      return animal.wang; // ts(2339)
    }
    return animal.miao; // ts(2339)
  };
}
