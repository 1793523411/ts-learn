// 联合，交叉
{
  interface Bird {
    fly(): void;
    layEggs(): void;
  }
  interface Fish {
    swim(): void;
    layEggs(): void;
  }
  const getPet: () => Bird | Fish = () => {
    return {
      fly: () => console.log("fly"),
    } as Bird | Fish;
  };
  const Pet = getPet();
  Pet.layEggs(); // ok
  //   Pet.fly(); // ts(2339) 'Fish' 没有 'fly' 属性; 'Bird | Fish' 没有 'fly' 属性
//   if (typeof Pet.fly === "function") {
//     // ts(2339)
//     Pet.fly(); // ts(2339)
//   }
  if ("fly" in Pet) {
    Pet.fly(); // ok
  }
}
{
	type UnionC = 'em' | 'rem';
	type UnionD = 'px' | 'pt';
	type IntersectionUnionE = UnionC & UnionD;
	// const intersectionE: IntersectionUnionE = 'any' as any; 
	const intersectionE2: IntersectionUnionE = 'any' as never; 
}
