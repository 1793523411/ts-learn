{

	type Goods = 'pen' | 'pencil' |'ruler';
  
	const getPenCost = (item: 'pen') => 2;
  
	const getPencilCost = (item: 'pencil') => 4;
  
	const getRulerCost = (item: 'ruler') => 6;
  
	const getCost = (item: Goods) =>  {
  
	//   if (item === 'pen') {
  
	// 	return getPenCost(item); // item => 'pen'
  
	//   } else if (item === 'pencil') {
  
	// 	return getPencilCost(item); // item => 'pencil'
  
	//   } else {
  
	// 	return getRulerCost(item); // item => 'ruler'
  
	//   }
	  if (item === 'pen') {
  
		return getPenCost(item); // item => 'pen'
  
	  } 
	   else {
  
		return item; // item => 'ruler'
  
	  }
  
	}
  
  }
  