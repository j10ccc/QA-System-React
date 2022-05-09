export function shuffle(array: any) {
  return rangeRam([0, array.length - 1], array.length).map((s) => array[s]);
}
const rangeRam = function (range: any, count: number) {
  const ramArr = [];
  const result = [];

  for (let i = range[0]; i <= range[1]; i++) {
    ramArr.push(i);
  }
  for (; count > 0; count--) {
    const ram = Math.floor(Math.random() * (ramArr.length - 1));

    result.push(ramArr[ram]);

    ramArr[ram] = ramArr[ramArr.length - 1];
    ramArr.pop();
  }
  return result;
};
