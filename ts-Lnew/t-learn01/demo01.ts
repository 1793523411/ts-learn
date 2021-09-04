const bigNum: bigint = 100n;

console.log(bigNum)

const userInfo: {

	id?: number;
  
	name?: null | string
  
  } = { id: 1, name: 'Captain' };
  
  if (userInfo.id !== undefined) { // Type Guard
  
	userInfo.id.toFixed(); // id 的类型缩小成 number
  
  }
  

// let id = userInfo.id?.toFixed(); // Optional Chain

const myName = userInfo.name?? `my name is ${userInfo.name}`; // 空值合并
