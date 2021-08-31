const myRemove = (array ,item) => {
  const newArray = [];
  for(let i = 0; i < array.length; i+= 1){
    if(array[i] !== item){
      newArray.push(array[i]);
    }
  }
};