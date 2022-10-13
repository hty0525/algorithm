function solution(n) {
  return [...String(n)].reduce((prev, cur) => prev + cur, 0);
}
