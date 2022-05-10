function shuffle(array) {
  return rangeRam(0, array.length - 1, array.length).map((s) => array[s]);
}
const rangeRam = function (begin, end, count) {
  const ramArr = [];
  const result = [];

  for (let i = begin; i <= end; i++) {
    ramArr.push(i);
  }
  for (; count > 0; count--) {
    const ram = Math.floor(Math.random() * (ramArr.length - 1));
    result.push(ramArr[ram]);
    ramArr[ram] = ramArr[ramArr.length - 1];
    ramArr.pop();
  }
  console.log('result', result);
  return result;
};

// console.log(shuffle([1, 2]));

const test = () => {
  return 
  {
    a: 1,
  };
};
const obj = test();
console.log(obj);
