function solution(array) {
  a = array.reduce((prev, cur) => {
    return prev + cur;
  });
  return array.reduce((prev, cur) => prev + cur) / array.length;
}
